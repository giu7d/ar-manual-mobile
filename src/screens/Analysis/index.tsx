import React, { useEffect } from "react";
import { Image } from "react-native";
import { observer } from "mobx-react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AnalysisInformation } from "../../components/molecules/AnalysisInformation";
import { AnalysisCanvas } from "../../components/molecules/AnalysisCanvas";
import { AnalysisBar } from "../../components/templates/AnalysisBar";
import { useStores } from "../../hooks/useStores";
import { GlobalStyle as GlobalWrapper } from "../../styles";

import { Wrapper } from "./styles";

export interface IAnalysisProps {}

export const Analysis: React.FC<IAnalysisProps> = observer((props) => {
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
    <GlobalWrapper>
      <Wrapper>
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
        <AnalysisBar />
      </Wrapper>
    </GlobalWrapper>
  );
});
