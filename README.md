# 🐱 Meow Spy

> ⚠️ **WARNING:  ALPHA SOFTWARE**  
> This is my first app ever!  The code is messy, unstable, and very much a work in progress. Expect bugs, quirks, and rough edges. Use at your own risk!

## 📱 About 

**Meow Spy** lets you watch cats in China from your phone! This Android app connects to cat cameras installed by [Purrrr](https://hipurrrr.com) using [Meow. camera](https://meow.camera)'s API, allowing you to spy on funny felines from anywhere.

This is a hobby project developed without commercial purposes and is NOT affiliated with Guangxi Ha Chong Network Technology Co., Ltd. 

## 🔧 Requirements

- **Node.js** (LTS version recommended)
- **JDK 11** (recommended for building Android apps)
- **Android Studio** (for Android SDK and emulator)
- **Expo CLI** (`npm install -g expo-cli`)
- **Android device or emulator** for testing

## 🏗️ Compiling

This app is built using the **Expo toolchain** and is designed for **Android only**.

### Production Builds

To create a production build, use **EAS Build**:

```bash
# Install EAS CLI if you haven't already
npm install -g eas-cli

# Log in to your Expo account
eas login

# Configure your project (first time only)
eas build:configure

# Build for Android
eas build --platform android
```

The build will be processed on Expo's servers and you'll receive an APK/AAB that you can install or submit to the Play Store.

## 👨‍💻 Development

### Important: Use Development Builds

**Do NOT use Expo Go!** Custom fonts won't work properly in Expo Go, and you may encounter other development experience issues.

Instead, use **development builds** with the local Expo toolchain:

```bash
# Install dependencies
npm install

# Run development build on Android
npx expo run:android
```

This will: 
1. Build a development version of the app
2. Install it on your connected Android device or running emulator
3. Start the Metro bundler

Make sure you have:
- Android SDK installed via Android Studio
- An Android device connected via USB with USB debugging enabled, OR
- An Android emulator running
- JDK 11 configured in your environment

### Project Structure

- `components/` - Reusable UI components
- `screens/` - App screens/pages
- `styles/` - Global styles and theme configuration
- `hooks/` - Custom React hooks

## Credits

- **Font**: Zen Maru Gothic by Yoshimichi Ohira (Open Source License)
- **Icon**: Made using Expo-Icon-Builder + Twemoji
- **Powered by**: [Meow.camera](https://meow.camera/) & [Purrrr](https://hipurrrr.com/)
- **Developer**: [Tjor](https://tjor.vercel.app/)

---

**Version**: Alpha 1.0.0

⭐ [Star on GitHub](https://github.com/tjor75/meow-spy) if you like this project!
