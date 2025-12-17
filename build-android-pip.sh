#!/bin/bash
# build-android-pip.sh
# Build Android app and verify PiP manifest setting

set -e

echo "=== Building Android app ==="
cd "$(dirname "$0")"

if [ ! -d "android" ]; then
  echo "Error: android directory not found. Run this script from the project root."
  exit 1
fi

cd android

# Clean build (optional, uncomment if needed)
# ./gradlew clean

# Assemble debug build
./gradlew assembleDebug

echo ""
echo "=== Build complete! ==="
echo ""

# Print the relevant AndroidManifest.xml <activity> line for PiP verification
echo "=== Checking for PiP support in AndroidManifest.xml ==="
grep -A 3 '<activity' app/src/main/AndroidManifest.xml | grep supportsPictureInPicture

if [ $? -eq 0 ]; then
  echo "PiP is ENABLED in MainActivity."
else
  echo "WARNING: PiP is NOT enabled in MainActivity!"
fi

echo ""
echo "APK output location:"
echo "  android/app/build/outputs/apk/debug/app-debug.apk"