@echo off
echo Starting Portfolio Application...
echo.

REM Check if node is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Install root dependencies if needed
if not exist "node_modules" (
    echo Installing root dependencies...
    call npm install
)

REM Install server dependencies if needed
if not exist "server\node_modules" (
    echo Installing server dependencies...
    cd server
    call npm install
    cd ..
)

REM Install client dependencies if needed
if not exist "client\node_modules" (
    echo Installing client dependencies...
    cd client
    call npm install
    cd ..
)

echo.
echo Starting both server and client...
echo Server will run on http://localhost:5000
echo Client will run on http://localhost:3000
echo.
echo Press Ctrl+C to stop both servers
echo.

REM Start both servers using concurrently
call npm run dev

pause

