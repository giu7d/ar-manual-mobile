import React from "react";
import { ActivityIndicator } from "react-native";
import { observer } from "mobx-react";
import { useStores } from "../../../hooks/useStores";
import { AnalysisCanvasWebView } from "./WebView";
import { AnalysisCanvasImage } from "./Image";
import { useTheme } from "styled-components";

export const AnalysisCanvasModes: React.FC = observer(() => {
  const { applicationStore, analysisStore } = useStores();
  const theme = useTheme();

  const getFileName = () => {
    try {
      const [source] =
        analysisStore.selectedInstruction?.sources.filter(
          ({ type }) => type === "3D"
        ) || [];

      const sourceRoutes = source.src.split("/");
      const fileName = sourceRoutes[sourceRoutes.length - 1];

      return fileName;
    } catch (error) {
      return undefined;
    }
  };

  if (!analysisStore.selectedInstruction) {
    return (
      <ActivityIndicator
        style={{ top: "50%" }}
        size="large"
        color={theme.colors.primary}
      />
    );
  }

  if (applicationStore.canvasMode === "photo") {
    return <AnalysisCanvasImage />;
  }

  return <AnalysisCanvasWebView file={getFileName()} />;
});
