# Dukaanly PowerShell Runner
$ErrorActionPreference = "Stop"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectDir

# Ensure Node is present in session PATH
$nodeDir = "C:\Users\shriw\.gemini\antigravity\scratch\node-v20.18.0-win-x64"
if ($env:Path -notlike "*$nodeDir*") {
    $env:Path = "$nodeDir;$env:Path"
}

Write-Host "=======================================================" -ForegroundColor DarkRed
Write-Host "         DUKAANLY - APNI DUKAAN DIGITAL PEHCHAAN       " -ForegroundColor Yellow
Write-Host "      AI-Powered Website Builder for Small Businesses   " -ForegroundColor White
Write-Host "=======================================================" -ForegroundColor DarkRed
Write-Host ""
Write-Host "Launching local server on http://localhost:5173 ..." -ForegroundColor Cyan
Write-Host ""

npm run dev -- --open --host
