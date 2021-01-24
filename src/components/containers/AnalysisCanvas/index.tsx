import React from "react";
import { observer } from "mobx-react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { useTestBench } from "../../../hooks/useTestbench";
import { AnalysisInformation } from "../../fragments/AnalysisInformation";
import { Wrapper } from "./styles";
import { AnalysisCanvasModes } from "./Modes";
import { AnalysisCanvasHeader } from "./Header";
import { useTheme } from "styled-components";
import { Warning } from "../../fragments/Warning";

interface IProps {
  testBenchId: string;
}

export const AnalysisCanvas: React.FC<IProps> = observer(({ testBenchId }) => {
  const { testBench, isLoading, isError } = useTestBench(testBenchId);
  const theme = useTheme();

  if (isLoading) {
    return (
      <Wrapper>
        <AnalysisCanvasHeader />
        <ActivityIndicator
          style={{ top: "50%" }}
          size="large"
          color={theme.colors.primary}
        />
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <AnalysisCanvasHeader />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Warning
            wrapperProps={{ style: { maxHeight: 175 } }}
            title="Error"
            description={`A error happened while loading the test benches into the canvas.\nMore information:`}
            error={isError?.message}
          />
        </View>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <AnalysisCanvasHeader />
      <AnalysisCanvasModes />
      <AnalysisInformation
        items={[
          {
            key: "Galga de controlo",
            value: testBench.testBenchSerialNumber,
          },
          {
            key: "Componente",
            value: testBench.componentSerialNumber,
          },
        ]}
      />
    </Wrapper>
  );
});
