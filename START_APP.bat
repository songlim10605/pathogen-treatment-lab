@echo off
setlocal
title Pathogen Learning Lab

where py >nul 2>nul
if not errorlevel 1 goto use_py

where python >nul 2>nul
if not errorlevel 1 goto use_python

echo Python was not found.
echo Install Python and select Add python.exe to PATH.
pause
exit /b 1

:use_py
set "PYTHON_CMD=py"
goto install

:use_python
set "PYTHON_CMD=python"

:install
echo Checking required packages...
%PYTHON_CMD% -m pip install -r requirements.txt
if errorlevel 1 goto failed

echo Starting the app...
%PYTHON_CMD% -m streamlit run app.py
goto end

:failed
echo Installation failed. Check the internet connection and Python setup.
pause
exit /b 1

:end
endlocal
