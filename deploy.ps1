#Requires -Version 5.1
<#
.SYNOPSIS
    Build and deploy the FUEL landing page to Hostinger via SSH.

.DESCRIPTION
    Runs `pnpm build` to produce a static export, then rsyncs changed files
    to the Hostinger server over SSH on port 65002.

    Best practice for performance:
      * `pnpm build` with Next.js `output: "export"` produces a static `out/` directory.
      * `rsync` transfers only changed files (compressed over SSH).
      * `--delete` removes files from the remote that no longer exist locally.

.PARAMETER RemoteHost
    Hostinger SSH host (IP or hostname).

.PARAMETER RemotePort
    SSH port (Hostinger uses 65002).

.PARAMETER RemoteUser
    SSH username.

.PARAMETER RemotePath
    Absolute remote directory (e.g. /domains/fuel-us.com/public_html/).

.PARAMETER SkipBuild
    Skip `pnpm build` and sync the existing `out/` directory.

.EXAMPLE
    ./deploy.ps1 -RemoteHost 82.197.83.79 -RemotePort 65002 -RemoteUser u382076499 -RemotePath /domains/fuel-us.com/public_html/

.EXAMPLE
    ./deploy.ps1 -RemoteHost 82.197.83.79 -RemotePort 65002 -RemoteUser u382076499 -RemotePath /domains/fuel-us.com/public_html/ -SkipBuild
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $false)]
    [string]$RemoteHost = "82.197.83.79",

    [Parameter(Mandatory = $false)]
    [int]$RemotePort = 65002,

    [Parameter(Mandatory = $false)]
    [string]$RemoteUser = "u382076499",

    [Parameter(Mandatory = $false)]
    [string]$RemotePath = "/domains/fuel-us.com/public_html/",

    [Parameter(Mandatory = $false)]
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$outDir = Join-Path $scriptDir "out"

Write-Host "=== FUEL Landing Page Deploy to Hostinger ===" -ForegroundColor Cyan
Write-Host "Remote: $RemoteUser@$RemoteHost:$RemotePort$RemotePath" -ForegroundColor Cyan
Write-Host ""

# ---------------------------------------------------------------------------
# Step 1: Build
# ---------------------------------------------------------------------------
if (-not $SkipBuild) {
    Write-Host "[1/2] Running pnpm build..." -ForegroundColor Yellow
    pnpm build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "pnpm build failed. Aborting deploy."
        exit 1
    }
    Write-Host "[1/2] Build succeeded." -ForegroundColor Green
} else {
    Write-Host "[1/2] Skipping build (-SkipBuild)." -ForegroundColor Yellow
}

# ---------------------------------------------------------------------------
# Step 2: Verify out/ exists
# ---------------------------------------------------------------------------
if (-not (Test-Path $outDir)) {
    Write-Error "Static output directory not found: $outDir"
    Write-Error "Run 'pnpm build' first or omit -SkipBuild."
    exit 1
}

# ---------------------------------------------------------------------------
# Step 3: rsync over SSH (sync changed files only)
# ---------------------------------------------------------------------------
Write-Host "[2/2] Syncing changed files to Hostinger via rsync+SSH..." -ForegroundColor Yellow

$sshOptions = "-p $RemotePort -o StrictHostKeyChecking=accept-new -o BatchMode=yes"
$rsyncExe = Get-Command rsync -ErrorAction SilentlyContinue

if ($rsyncExe) {
    Write-Host "Using rsync (delta transfer, compressed)." -ForegroundColor Green
    rsync -avz --delete -e "ssh $sshOptions" "$outDir/" "$RemoteUser@$RemoteHost:$RemotePath"
    if ($LASTEXITCODE -ne 0) {
        Write-Error "rsync failed. Aborting deploy."
        exit 1
    }
} else {
    Write-Warning "rsync not found on PATH. Install rsync (Git Bash / WSL / cwRsync) for delta sync."
    Write-Warning "Falling back to scp (full re-upload, slower)."
    $scpCmd = "scp -P $RemotePort -r $outDir/* $RemoteUser@$RemoteHost:$RemotePath"
    Write-Host "Running: $scpCmd" -ForegroundColor Yellow
    & $scpCmd
    if ($LASTEXITCODE -ne 0) {
        Write-Error "scp failed. Aborting deploy."
        exit 1
    }
}

Write-Host ""
Write-Host "=== Deploy complete! Site is live at https://fuel-us.com ===" -ForegroundColor Green
