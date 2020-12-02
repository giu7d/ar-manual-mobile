import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { observer } from "mobx-react";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Header } from "../../fragments/AnalysisBar/Header";
import { InstructionCard } from "../../fragments/AnalysisBar/InstructionCard";
import { FinalAction } from "../../fragments/FinalAction";
import { Typography } from "../../fragments/Typography";
// import ProgressiveScroll from "../../fragments/ProgressiveScroll";
import { useStores } from "../../../hooks/useStores";
import { useTestBench } from "../../../hooks/useTestbench";
import { Analysis } from "../../../models/Analysis";
import { Instruction } from "../../../models/TestBenchIndexed";
import { Wrapper, ScrollWrapper } from "./styles";
import uuid from "react-native-uuid";

export const AnalysisBar: React.FC = observer(() => {
  const route = useRoute() as { params: { id: string } };
  const navigation = useNavigation();
  const { testBench, isError, isLoading } = useTestBench(route.params.id);
  const { analysisStore, applicationStore } = useStores();

  const toNextInstruction = (nextInstructionId?: string) => {
    const nextInstruction =
      testBench.instructions.find(({ id }) => id === nextInstructionId) || null;
    analysisStore.setSelectedInstruction(nextInstruction);
  };

  const handleSelected = (instruction: Instruction, state: boolean) => {
    if (state) {
      analysisStore.setSelectedInstruction(instruction);
    }
  };

  const handleAnalysisDone = (
    instruction: Instruction,
    status: "success" | "failure" | "pending"
  ) => {
    if (status === "success") {
      const analysis = new Analysis({
        id: uuid.v4(),
        instructionId: instruction.id,
        startedAt: analysisStore.selectedInstructionAt,
        finishedAt: new Date(),
        status,
      });

      analysisStore.addAnalysis(analysis);
      toNextInstruction(instruction.nextInstructionId);
    }

    if (status === "failure") {
      navigation.navigate("FailureModal", { id: testBench.id });
      toNextInstruction(instruction.nextInstructionId);
    }

    if (status === "pending") {
      analysisStore.removeAnalysis(instruction.id);
    }
  };

  const handleFinish = () => {
    analysisStore.finishAnalysis();
    analysisStore.clear();
    navigation.navigate("Home");
  };

  if (isLoading) {
    return (
      <Wrapper>
        <Typography>Loading</Typography>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <Typography>Error</Typography>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {applicationStore.account && (
        <Header
          initial={applicationStore.account.initial}
          handleLogout={() => applicationStore.clear()}
          done={analysisStore.analysis.length}
          total={testBench.instructions.length}
        />
      )}
      <ScrollWrapper>
        <ScrollView>
          <Typography icon="layers">Instructions</Typography>
          {testBench.instructions
            .sort((a, b) => a.step - b.step)
            .map((instruction) => (
              <View key={instruction.id} onLayout={(event) => console.log("")}>
                <InstructionCard
                  title={`#${instruction.step}`}
                  description={instruction.description}
                  warning={[
                    ...instruction.warnings.map(({ description }) => ({
                      title: "Atenção",
                      description,
                    })),
                  ]}
                  selected={
                    analysisStore.selectedInstruction?.id === instruction.id
                  }
                  setSelected={(state) => handleSelected(instruction, state)}
                  status={
                    analysisStore.analysis.find(
                      (item) => item.instructionId === instruction.id
                    )?.status
                  }
                  onAnalysisDone={(status) =>
                    handleAnalysisDone(instruction, status)
                  }
                />
              </View>
            ))}
          {/* <ProgressiveScroll
          renderItems={(onLayout, onNext) =>
            testBench.instructions.map((instruction) => (
              <View
                key={instruction.id}
                onLayout={(event) => onLayout(instruction.id, event)}
              >
                <InstructionCard
                  title={`#${instruction.step}`}
                  description={instruction.description}
                  warning={[
                    ...instruction.warnings.map(({ description }) => ({
                      title: "Atenção",
                      description,
                    })),
                  ]}
                  selected={selectedInstructionId === instruction.id}
                  setSelected={(state) => handleSelected(instruction, state)}
                  status={
                    analysisStore.analysis.find(
                      (item) => item.instructionId === instruction.id
                    )?.status
                  }
                  onAnalysisDone={(status) =>
                    handleAnalysisDone(instruction, status, onNext)
                  }
                />
              </View>
            ))
          }
        >
          <Typography icon="layers">Instructions</Typography>
        </ProgressiveScroll> */}
          <FinalAction
            onFinish={handleFinish}
            disabled={
              analysisStore.analysis.length !== testBench.instructions.length
            }
          />
        </ScrollView>
      </ScrollWrapper>
    </Wrapper>
  );
});
