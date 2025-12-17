@echo off
REM build-android-pip.bat
REM Build Android app and verify PiP manifest setting

REM Step 1: Print PiP manifest line for verification
echo Checking AndroidManifest.xml for PiP support...
findstr /C:"android:supportsPictureInPicture=\"true\"" android\app\src\main\AndroidManifest.xml
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] PiP support not found in AndroidManifest.xml!
    exit /b 1
) ELSE (
    echo [OK] PiP support is enabled in AndroidManifest.xml.
)

REM Step 2: Clean and build the Android app
echo.
echo Cleaning previous builds...
cd android
call gradlew clean
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Gradle clean failed!
    exit /b 1
)

echo.
echo Building Android app (Release)...
call gradlew assembleRelease
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Android build failed!
    exit /b 1
)

echo.
echo [SUCCESS] Android app built with PiP support enabled.
cd ..