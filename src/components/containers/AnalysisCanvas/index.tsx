import React from "react";
import { observer } from "mobx-react";
import { Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { useTestBench } from "../../../hooks/useTestbench";
import { useStores } from "../../../hooks/useStores";
import { AnalysisInformation } from "../../fragments/AnalysisInformation";
import { Wrapper, HeaderWrapper, CanvasIconButton } from "./styles";

interface IProps {
  testBenchId: string;
}

export const AnalysisCanvas: React.FC<IProps> = observer(({ testBenchId }) => {
  const { testBench, isLoading, isError } = useTestBench(testBenchId);
  const { analysisStore } = useStores();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }
  return (
    <Wrapper>
      <HeaderWrapper>
        <CanvasIconButton onPress={handleGoBack}>
          <Icon name="chevron-left" size={24} />
        </CanvasIconButton>
      </HeaderWrapper>
      {analysisStore.selectedInstruction && (
        <Image
          source={{ uri: analysisStore.selectedInstruction.sources[0].src }}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode="contain"
        />
      )}
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
