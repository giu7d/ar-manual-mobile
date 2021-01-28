import React from "react";
import { ActivityIndicator, View } from "react-native";
import { observer } from "mobx-react";
import { useStores } from "../../../hooks/useStores";
import { AnalysisCanvasWebView } from "./WebView";
import { AnalysisCanvasImage } from "./Image";
import { useTheme } from "styled-components";
import { useAnalysis } from "../../../hooks/useAnalysis";
import { useInstructions } from "../../../hooks/useInstructions";
import { Information } from "../../fragments/Information";

export const AnalysisCanvasModes: React.FC<{ testBenchId: string }> = observer(
  ({ testBenchId }) => {
    const { applicationStore, analysisStore } = useStores();
    const { analysis } = useAnalysis();
    const { instructions } = useInstructions(testBenchId);

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

    if (
      !analysisStore.selectedInstruction &&
      analysis.length === instructions.length
    ) {
      return (
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Information
            wrapperProps={{ style: { maxHeight: 150 } }}
            icon="check"
            title="Pronto!"
            description="Todos os itens foram avaliados, selecione 'finalizar' para prosseguir."
          />
        </View>
      );
    }

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
  }
);
