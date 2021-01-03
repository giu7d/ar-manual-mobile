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
  console.log(`${RENDER_URL}/render/${folder}/${file}`);

  return (
    <WebView
      style={{ flex: 1, flexGrow: 1, backgroundColor: "#333" }}
      source={{ uri: `${RENDER_URL}/render/${folder}/${file}` }}
      cacheEnabled
      javaScriptEnabled
      domStorageEnabled
      thirdPartyCookiesEnabled
      sharedCookiesEnabled
      onError={(e) => console.log(e)}
    />
  );
};
