# Multi-stage build for GitHub MCP Server
FROM golang:1.24.4-alpine AS builder

WORKDIR /build

# Install git for go mod download
RUN apk add --no-cache git

# Copy go mod files first for better caching
COPY go.mod go.sum .

# Source code must be present BEFORE tidy
COPY . .

# Allow Go to regenerate go.sum based on actual imports
RUN go mod tidy

# Download dependencies using the updated go.sum
RUN go mod download

# Optional but recommended
RUN go mod verify

# Build the Go binary
RUN CGO_ENABLED=0 GOOS=linux go build -o github-mcp-server ./cmd/github-mcp-server

# Final stage
FROM alpine:latest

RUN apk --no-cache add ca-certificates python3 py3-pip
WORKDIR /root/

# Copy the binary from builder stage
COPY --from=builder /build/github-mcp-server /usr/local/bin/github-mcp-server

# Copy the Python proxy script and requirements
COPY app.py .
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt --break-system-packages

# Make sure the binary is executable
RUN chmod +x /usr/local/bin/github-mcp-server

# Expose port
EXPOSE 7860

# Run the Python proxy using uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]
