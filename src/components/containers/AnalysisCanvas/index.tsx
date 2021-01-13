import React from "react";
import { observer } from "mobx-react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { useTestBench } from "../../../hooks/useTestbench";
import { useStores } from "../../../hooks/useStores";
import { AnalysisInformation } from "../../fragments/AnalysisInformation";
import { Wrapper, HeaderWrapper, CanvasIconButton } from "./styles";
import { AnalysisCanvasModes } from "./AnalysisCanvasModes";

interface IProps {
  testBenchId: string;
}

export const AnalysisCanvas: React.FC<IProps> = observer(({ testBenchId }) => {
  const navigation = useNavigation();
  const { applicationStore, analysisStore } = useStores();
  const { testBench, isLoading, isError } = useTestBench(testBenchId);

  const handleGoBack = () => {
    analysisStore.clear();
    navigation.navigate("Home");
  };

  if (isLoading) {
    return (
      <Wrapper>
        <Text>Loading</Text>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <Text>Error</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <CanvasIconButton onPress={handleGoBack}>
          <Icon name="chevron-left" size={24} />
        </CanvasIconButton>

        <CanvasIconButton
          onPress={() =>
            applicationStore.setCanvasMode(
              applicationStore.canvasMode === "photo" ? "3D" : "photo"
            )
          }
        >
          <Icon name="box" size={24} />
        </CanvasIconButton>
      </HeaderWrapper>
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
