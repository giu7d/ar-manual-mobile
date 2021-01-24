import React from "react";
import Constants from "expo-constants";
import WebView from "react-native-webview";
import { ActivityIndicator, View } from "react-native";
import { useTheme } from "styled-components";
import { Warning } from "../../fragments/Warning";

const { RENDER_URL } = Constants.manifest.extra;

interface Props {
  folder?: string;
  file?: string;
}

export const AnalysisCanvasWebView: React.FC<Props> = ({
  folder = "instructions",
  file,
}) => {
  const theme = useTheme();

  if (!file) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Warning
          wrapperProps={{ style: { maxHeight: 150 } }}
          title="Error"
          description={`No file found!`}
          error="This instruction may not have a animation file (.glb) associated!"
        />
      </View>
    );
  }

  return (
    <WebView
      style={{ flex: 1, flexGrow: 1, backgroundColor: "#333" }}
      source={{ uri: `${RENDER_URL}/render/${folder}/${file}` }}
      renderError={(err) => (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Warning
            wrapperProps={{ style: { maxHeight: 250 } }}
            title="Error"
            description={`A error happened while loading the 3D Model.\nMore information:`}
            error={err}
          />
        </View>
      )}
      renderLoading={() => (
        <ActivityIndicator
          style={{ top: "50%" }}
          size="large"
          color={theme.colors.primary}
        />
      )}
      cacheEnabled
      javaScriptEnabled
      domStorageEnabled
      thirdPartyCookiesEnabled
      sharedCookiesEnabled
    />
  );
};
