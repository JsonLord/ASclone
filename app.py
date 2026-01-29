import asyncio
import os
import logging
import json
from fastapi import FastAPI, Request, Response

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="GitHub MCP Server Proxy",
    description="""
This server acts as a proxy for the GitHub Model Context Protocol (MCP) server.
It exposes the MCP functionality over HTTP to be compatible with Hugging Face Spaces.

### Endpoints:
* `GET /`: Health check to verify the proxy and the underlying MCP subprocess.
* `POST /`: The main entry point for MCP JSON-RPC requests.
* `/docs`: This documentation page.

### How to connect:
Send JSON-RPC 2.0 requests to the `POST /` endpoint.
For example, to list available tools:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {}
}
```
""",
    version="1.0.0"
)
proc = None
lock = asyncio.Lock()

@app.get("/")
async def health_check():
    return {"status": "healthy", "subprocess_running": proc is not None and proc.returncode is None}

@app.on_event("startup")
async def startup_event():
    global proc
    logger.info("Starting up...")
    token = os.environ.get("GITHUB_PERSONAL_ACCESS_TOKEN")
    if not token:
        logger.error("GITHUB_PERSONAL_ACCESS_TOKEN environment variable not set")
        return

    try:
        proc = await asyncio.create_subprocess_exec(
            '/usr/local/bin/github-mcp-server', 'stdio',
            stdin=asyncio.subprocess.PIPE,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            env={"GITHUB_PERSONAL_ACCESS_TOKEN": token}
        )
        logger.info("Subprocess started with PID %d", proc.pid)
        asyncio.create_task(log_stderr())
    except Exception as e:
        logger.error("Failed to create subprocess: %s", str(e))
        raise

async def log_stderr():
    if proc and proc.stderr:
        while not proc.stderr.at_eof():
            try:
                line = await proc.stderr.readline()
                if line:
                    logger.debug("github-mcp-server stderr: %s", line.decode(errors='replace').strip())
            except Exception:
                break

@app.post("/")
async def proxy(request: Request):
    if not proc or proc.returncode is not None:
        return Response(status_code=500, content="Subprocess not running")

    async with lock:
        body = await request.body()
        if not body.endswith(b"\n"):
            body += b"\n"

        try:
            proc.stdin.write(body)
            await proc.stdin.drain()
        except Exception as e:
            logger.error("Error writing to subprocess: %s", str(e))
            return Response(status_code=500, content=f"Error writing to subprocess: {str(e)}")

        response_buffer = bytearray()
        decoder = json.JSONDecoder()

        try:
            while True:
                # Wait for data from stdout
                chunk = await asyncio.wait_for(proc.stdout.read(4096), timeout=60.0)
                if not chunk:
                    logger.info("Subprocess stdout closed")
                    break
                response_buffer.extend(chunk)

                try:
                    data = response_buffer.decode('utf-8')
                    stripped_data = data.lstrip()
                    if stripped_data:
                        # Try to decode the first JSON object
                        obj, index = decoder.raw_decode(stripped_data)

                        # Find where the object ends in the original data
                        actual_end = data.find(stripped_data) + index
                        response_content = data[:actual_end].encode('utf-8')

                        # If there is remaining data, we should probably keep it for the next request?
                        # But in a sequential model, there shouldn't be any.
                        # If there is, we'll just log it for now.
                        remaining = data[actual_end:].strip()
                        if remaining:
                            logger.warning("Remaining data after JSON decode: %s", remaining)

                        return Response(content=response_content, media_type="application/json")
                except (json.JSONDecodeError, UnicodeDecodeError):
                    # Continue reading if we don't have a full JSON object yet
                    continue
        except asyncio.TimeoutError:
            logger.error("Timeout waiting for subprocess response")
            return Response(status_code=504, content="Timeout waiting for subprocess response")
        except Exception as e:
            logger.error("Error reading from subprocess: %s", str(e))
            return Response(status_code=500, content=f"Error reading from subprocess: {str(e)}")

    return Response(status_code=500, content="No response from subprocess")

@app.on_event("shutdown")
async def shutdown_event():
    if proc:
        logger.info("Shutting down subprocess...")
        proc.kill()
        await proc.wait()
