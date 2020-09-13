import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { AnalysisInformation } from "../../components/molecules/AnalysisInformation";
import { AnalysisCanvas } from "../../components/molecules/AnalysisCanvas";
import { AnalysisBar } from "../../components/organisms/AnalysisBar";
import { AnalysisInstructionCard } from "../../components/organisms/AnalysisInstructionCard";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { ActionsWrapper, Wrapper } from "./styles";
import { useStores } from "../../hooks/useStores";
import { Button } from "../../components/molecules/Button";
import { ITheme } from "../../theme";

export interface IAnalysisProps {}

export const Analysis: React.FC<IAnalysisProps> = observer((props) => {
  const navigation = useNavigation();
  const route = useRoute() as { params: { id: string } };
  const theme = useTheme() as ITheme;
  const { analysisStore } = useStores();

  useEffect(() => {
    console.log("> Testbench ID", route.params.id);
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
          <>
            {analysisStore.instructions.map((instruction) => (
              <AnalysisInstructionCard
                key={instruction.id}
                title={`#${instruction.stepNumber}`}
                description={instruction.description}
                warning={[
                  ...instruction.warning.map(({ description }) => ({
                    title: "Atenção",
                    description,
                  })),
                ]}
                selected={
                  analysisStore.selectedInstructionId === instruction.id
                }
                setSelected={(state) => {
                  if (state) {
                    analysisStore.selectInstruction(instruction.id);
                  }
                }}
                onAnalysisFinished={(status) => {
                  if (status === "fail") {
                    navigation.navigate("ReportFailure", { instruction });
                  } else {
                    analysisStore.setAnalysis(instruction, status);
                    analysisStore.selectInstruction(instruction.nextStep);
                  }
                }}
              />
            ))}
            <ActionsWrapper>
              <Button
                onPress={() => {}}
                touchableProps={{
                  disabled: !analysisStore.isAnalysisFinished,
                  style: {
                    alignSelf: "center",
                    minWidth: "90%",
                    backgroundColor: theme.colors.primary,
                    opacity: !analysisStore.isAnalysisFinished ? 0.5 : 1,
                  },
                }}
                textProps={{
                  style: {
                    color: theme.colors.foreground,
                  },
                }}
              >
                Finalizar
              </Button>
            </ActionsWrapper>
          </>
        </AnalysisBar>
      </Wrapper>
    </GlobalWrapper>
  );
});
