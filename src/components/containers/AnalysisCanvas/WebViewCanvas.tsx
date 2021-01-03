import React from "react";
import Constants from "expo-constants";
import WebView from "react-native-webview";
import { Typography } from "../../fragments/Typography";

const { RENDER_URL } = Constants.manifest.extra;

interface Props {
  folder?: string;
  file?: string;
}

export const WebViewCanvas: React.FC<Props> = ({
  folder = "instructions",
  file,
}) => {
  if (!file) {
    return <Typography>No 3D file found! </Typography>;
  }

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
