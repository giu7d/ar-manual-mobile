import React from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";

import { useStores } from "../../../hooks/useStores";
import { Typography } from "../../fragments/Typography";
import { WebViewCanvas } from "./WebViewCanvas";

export const AnalysisCanvasModes: React.FC = observer(() => {
  const { applicationStore, analysisStore } = useStores();

  const getFileName = () => {
    if (!analysisStore.selectedInstruction) {
      return undefined;
    }

    const models = analysisStore.selectedInstruction.sources.filter(
      ({ type }) => type === "3D"
    );

    if (!models) {
      return undefined;
    }

    const [firstModel] = models;

    const splicedSrc = firstModel.src.split("/");
    const model = splicedSrc[splicedSrc.length - 1];

    return model;
  };

  if (!analysisStore.selectedInstruction) {
    return <Typography>No selected instruction</Typography>;
  }

  if (applicationStore.canvasMode === "photo") {
    const uri = analysisStore.selectedInstruction.sources.filter(
      ({ type }) => type === "image"
    )[0].src;

    return (
      <Image
        source={{ uri }}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="contain"
      />
    );
  }

  return <WebViewCanvas file={getFileName()} />;
});
