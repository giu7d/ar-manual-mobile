import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AnalysisInformation } from "../../components/molecules/AnalysisInformation";
import { AnalysisCanvas } from "../../components/molecules/AnalysisCanvas";
import { AnalysisBar } from "../../components/organisms/AnalysisBar";
import { AnalysisInstructionCard } from "../../components/organisms/AnalysisInstructionCard";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { Wrapper } from "./styles";
import { useStores } from "../../hooks/useStores";

export interface IAnalysisProps {}

export const Analysis: React.FC<IAnalysisProps> = observer((props) => {
  const navigation = useNavigation();
  const route = useRoute() as { params: { id: string } };

  const { analysisStore } = useStores();

  useEffect(() => {
    console.log(route.params.id);
    analysisStore.fetch();
  }, []);

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <GlobalWrapper>
      <Wrapper>
        <AnalysisCanvas handleGoBack={handleGoBack}>
          <AnalysisInformation
            items={[
              {
                key: "Galga de controlo",
                value: analysisStore.testbenchSerialNumber,
              },
              { key: "Componente", value: analysisStore.componentSerialNumber },
            ]}
          />
        </AnalysisCanvas>
        <AnalysisBar handleLogout={handleLogout}>
          {analysisStore.instructions.map(
            ({ id, description, stepNumber, warning, nextStep }) => (
              <AnalysisInstructionCard
                key={id}
                title={`#${stepNumber}`}
                description={description}
                warning={[
                  ...warning.map(({ description }) => ({
                    title: "Atenção",
                    description,
                  })),
                ]}
                selected={analysisStore.selectedInstructionId === id}
                setSelected={(state) => {
                  if (state) {
                    analysisStore.selectInstruction(id);
                  }
                }}
                onAnalysisFinished={() => {
                  analysisStore.selectInstruction(nextStep);
                }}
              />
            )
          )}
        </AnalysisBar>
      </Wrapper>
    </GlobalWrapper>
  );
});
