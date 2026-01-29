---
title: GitHub MCP Server
emoji: 🤖
colorFrom: indigo
colorTo: purple
sdk: docker
sdk_version: "3.9"
app_file: app.py
pinned: false
---

# GitHub MCP Server - Fixed Build Solution

This repository contains the fixed versions of the GitHub MCP Server that resolves the Docker build issue.

## Problem

The original Dockerfile failed with the error:
```
--> ERROR: process "/bin/sh -c go mod edit -replace=github.com/mark3labs/mcp-go=github.com/mark3labs/mcp-go/mcp" did not complete successfully: exit code: 1
```

The error occurred because the replacement path 'github.com/mark3labs/mcp-go/mcp' was not a local directory path as required by Go modules.

## Solution

Two key fixes have been implemented:

### 1. Fixed main.go
- Updated import path from `github.com/mark3labs/mcp-go` to `github.com/mark3labs/mcp-go/mcp`
- Added all necessary imports (`bytes`, `io`)
- Maintained all existing functionality with enhanced logging

### 2. Fixed Dockerfile
- Removed the problematic `go mod edit -replace` command
- Implemented proper multi-stage build process
- Ensures the github-mcp-server binary is correctly built and copied
- Uses proper dependency management with `go mod download`

## How to Use

1. Replace the original `main.go` in `cmd/github-mcp-server/` with the fixed version
2. Replace the original `Dockerfile` with the fixed version
3. Build the Docker image normally

## Changes Made

### main.go
- Changed import path to use the correct module structure
- Added missing imports for `bytes` and `io` packages
- Preserved all existing functionality

### Dockerfile
- Removed problematic module replacement
- Used standard multi-stage build approach
- Properly copies the built binary to final image
- Ensures the binary is executable

This solution resolves the build issue while maintaining all the original functionality including the enhanced logging and error handling that was added to debug the subprocess response issues.
