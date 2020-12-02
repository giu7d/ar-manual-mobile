import React, { useEffect } from "react";
import { Image, Text } from "react-native";
import { observer } from "mobx-react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AnalysisInformation } from "../components/fragments/AnalysisInformation";
import { AnalysisCanvas } from "../components/fragments/AnalysisCanvas";
import { AnalysisBar } from "../components/containers/AnalysisBar";
import { AnalysisTemplate } from "../components/templates/AnalysisTemplate";
import { useStores } from "../hooks/useStores";
import { useTestBench } from "../hooks/useTestbench";

export const Analysis: React.FC = observer(() => {
  const route = useRoute() as { params: { id: string } };
  const navigation = useNavigation();
  const { testBench, isLoading, isError } = useTestBench(route.params.id);

  const { analysisStore } = useStores();

  useEffect(() => {
    if (testBench) {
      analysisStore.setSelectedInstruction(
        testBench.instructions.find(({ step }) => step === 1) || null
      );
    }
  }, [testBench]);

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
    <AnalysisTemplate>
      <AnalysisCanvas handleGoBack={handleGoBack}>
        <>
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
        </>
      </AnalysisCanvas>
      <AnalysisBar />
    </AnalysisTemplate>
  );
});
