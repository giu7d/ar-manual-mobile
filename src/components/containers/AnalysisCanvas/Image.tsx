import React from "react";
import { Image } from "react-native";
import { useStores } from "../../../hooks/useStores";

export const AnalysisCanvasImage: React.FC = () => {
  const { analysisStore } = useStores();

  return (
    <Image
      source={{
        uri: analysisStore.selectedInstruction?.sources.filter(
          ({ type }) => type === "image"
        )[0].src,
      }}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      resizeMode="contain"
    />
  );
};
