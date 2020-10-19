import React, { useEffect } from "react";
import { Image } from "react-native";
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
  const { analysisStore, userStore } = useStores();

  useEffect(() => {
    analysisStore.fetch(route.params.id);
  }, []);

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const handleFinished = async () => {
    await analysisStore.finishAnalysis();
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
        <AnalysisBar
          initial={userStore.user.initial}
          handleLogout={handleLogout}
        >
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
                status={
                  analysisStore.analysis.find(
                    ({ instruction }) =>
                      instruction.id === analysisStore.selectedInstructionId
                  )?.status
                }
                onAnalysisDone={(status) => {
                  if (status === "fail") {
                    navigation.navigate("ReportFailure", { instruction });
                  } else {
                    analysisStore.setAnalysis(instruction, status);
                    instruction.nextStep
                      ? analysisStore.selectInstruction(instruction.nextStep)
                      : null;
                  }
                }}
              />
            ))}
            <ActionsWrapper>
              <Button
                onPress={handleFinished}
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
