import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import WebView from "react-native-webview";

const { RENDER_URL } = Constants.manifest.extra;

interface Props {
  folder?: string;
  file?: string;
}

export const WebViewCanvas: React.FC<Props> = ({
  folder = "instructions",
  file = "abef9d6a-2497-4a37-895f-c6fa3ff16087.glb",
}) => {
  return (
    <WebView
      style={{ flex: 1, flexGrow: 1 }}
      source={{ uri: `${RENDER_URL}/render/${folder}/${file}` }}
      renderToHardwareTextureAndroid
      // cacheMode="LOAD_CACHE_ELSE_NETWORK"
      // cacheEnabled
      // javaScriptEnabled
      // domStorageEnabled
      // thirdPartyCookiesEnabled
      // sharedCookiesEnabled
    />
  );
};
