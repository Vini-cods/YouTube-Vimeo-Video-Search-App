#  YouTube & Vimeo Video Search App  <img src="https://github.com/user-attachments/assets/3bee36e5-c905-443f-a5ed-960f6255a1c0" width="50" height="50" /> <img src="https://github.com/user-attachments/assets/6d31c38e-d2d8-4836-87e4-9b4898a948ef" width="50" height="50" />


This React Native app 
allows users to search and watch videos from **YouTube** and **Vimeo** using their public APIs.

## 🚀 Features

- 🔍 Search for YouTube videos using the YouTube Data API
- 🔍 Search for Vimeo videos using the Vimeo API
- 📺 Embedded video playback with `react-native-webview`
- 🧭 Bottom tab navigation with custom icons
- 🎉 Welcome screen with stack navigation

## 🛠️ Technologies Used

- React Native
- Expo
- React Navigation
- YouTube Data API v3
- Vimeo API
- Axios
- WebView


## 🔐 Vimeo API Token Setup

1. Go to [Vimeo Developer Console](https://developer.vimeo.com/apps)
2. Create a new app and generate a personal access token
3. Set the token with `public` scope
4. Add your token in `vimeo.js`:

```js
const ACCESS_TOKEN = 'Bearer YOUR_ACCESS_TOKEN';


