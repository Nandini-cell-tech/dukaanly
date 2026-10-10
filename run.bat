@echo off
title Dukaanly - Apni Dukaan Digital Pehchaan
cd /d "%~dp0"

echo =======================================================
echo          DUKAANLY - APNI DUKAAN DIGITAL PEHCHAAN
echo       AI-Powered Website Builder for Small Businesses
echo =======================================================
echo.

:: Ensure portable Node is on PATH if not already in system PATH
set "PATH=C:\Users\shriw\.gemini\antigravity\scratch\node-v20.18.0-win-x64;%PATH%"

echo Starting Dukaanly local development server on http://localhost:5173 ...
echo.
npm run dev -- --open --host
pause
