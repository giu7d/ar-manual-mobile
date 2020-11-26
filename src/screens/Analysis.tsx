import React, { useEffect } from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AnalysisInformation } from "../components/fragments/AnalysisInformation";
import { AnalysisCanvas } from "../components/fragments/AnalysisCanvas";
import { AnalysisTemplate } from "../components/templates/AnalysisTemplate";
import { useStores } from "../hooks/useStores";

export const Analysis: React.FC = observer(() => {
  const navigation = useNavigation();
  const route = useRoute() as { params: { id: string } };
  const { analysisStore } = useStores();

  useEffect(() => {
    analysisStore.fetch(route.params.id);
  }, []);

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  return (
    <AnalysisTemplate>
      <AnalysisCanvas handleGoBack={handleGoBack}>
        <>
          {analysisStore.selectedInstruction && (
            <Image
              source={{ uri: analysisStore.selectedInstruction.src }}
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
                value: analysisStore.testbenchSerialNumber,
              },
              {
                key: "Componente",
                value: analysisStore.componentSerialNumber,
              },
            ]}
          />
        </>
      </AnalysisCanvas>
    </AnalysisTemplate>
  );
});
