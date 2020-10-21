import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../organisms/AnalysisBar/Header";
import { InstructionCard } from "../../organisms/AnalysisBar/InstructionCard";
import { FinalAction } from "../../organisms/AnalysisBar/FinalAction";
import { Typography } from "../../molecules/Typography";
import { useStores } from "../../../hooks/useStores";

import { Wrapper, ScrollWrapper } from "./styles";
import { Instruction } from "../../../models/Instruction";

interface IProps {}

export const AnalysisBar: React.FC<IProps> = observer((props) => {
  const navigation = useNavigation();
  const { analysisStore, userStore } = useStores();

  const handleLogout = () => {
    userStore.logout();
  };

  const handleFinish = async () => {
    await analysisStore.finishAnalysis();
    navigation.navigate("Home");
  };

  const handleAnalysisDone = (
    instruction: Instruction,
    status: "success" | "fail" | "pending"
  ) => {
    console.log(status);

    if (status === "fail") {
      navigation.navigate("ReportFailure", { instruction });
      return;
    }

    if (status === "success") {
      analysisStore.setAnalysis(instruction, status);
      instruction.nextStep &&
        analysisStore.selectInstruction(instruction.nextStep);
      return;
    }

    analysisStore.setAnalysis(instruction, status);
    return;
  };

  const handleSelected = (instruction: Instruction, state: boolean) => {
    if (state) {
      analysisStore.selectInstruction(instruction.id);
    }
  };

  return (
    <Wrapper>
      <Header
        initial={userStore.user.initial}
        handleLogout={handleLogout}
        done={analysisStore.analysis.length}
        total={analysisStore.instructions.length}
      />
      <ScrollWrapper>
        <ScrollView>
          <Typography icon="layers">Instructions</Typography>
          {analysisStore.instructions.map((instruction) => (
            <InstructionCard
              key={instruction.id}
              title={`#${instruction.stepNumber}`}
              description={instruction.description}
              warning={[
                ...instruction.warning.map(({ description }) => ({
                  title: "Atenção",
                  description,
                })),
              ]}
              selected={analysisStore.selectedInstructionId === instruction.id}
              setSelected={(state) => handleSelected(instruction, state)}
              status={
                analysisStore.analysis.find(
                  (item) => item.instruction.id === instruction.id
                )?.status
              }
              onAnalysisDone={(status) =>
                handleAnalysisDone(instruction, status)
              }
            />
          ))}
          <FinalAction
            onFinish={handleFinish}
            disabled={!analysisStore.isAnalysisFinished}
          />
        </ScrollView>
      </ScrollWrapper>
    </Wrapper>
  );
});
