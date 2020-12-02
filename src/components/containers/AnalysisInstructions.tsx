import React from "react";
import { LayoutRectangle, View } from "react-native";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { useStores } from "../../hooks/useStores";
import { useTestBench } from "../../hooks/useTestbench";
import { Instruction } from "../../models/TestBenchIndexed";
import { Analysis } from "../../models/Analysis";
import { InstructionCard } from "../fragments/AnalysisBar/InstructionCard";

interface IProps {
  testBenchId: string;
  onLayout?: (event: LayoutRectangle, id: string) => void;
  toNext?: (id?: string) => void;
}

export const AnalysisInstructions: React.FC<IProps> = observer(
  ({ testBenchId, onLayout = () => {}, toNext = () => {} }) => {
    const navigation = useNavigation();
    const { analysisStore } = useStores();
    const { testBench, isError, isLoading } = useTestBench(testBenchId);

    const onSelected = (instruction: Instruction, state: boolean) => {
      if (state) {
        analysisStore.setSelectedInstruction(instruction);
      }
    };

    const onAnalysisDone = (
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

        const nextInstruction =
          testBench.instructions.find(
            ({ id }) => id === instruction.nextInstructionId
          ) || null;

        if (nextInstruction) {
          analysisStore.setSelectedInstruction(nextInstruction);
          toNext(nextInstruction.id);
        }
      }

      if (status === "failure") {
        navigation.navigate("FailureModal", { id: testBench.id });
      }

      if (status === "pending") {
        analysisStore.removeAnalysis(instruction.id);
      }
    };

    if (isLoading) {
      return null;
    }

    if (isError) {
      return null;
    }

    return (
      <>
        {testBench.instructions
          .sort((a, b) => a.step - b.step)
          .map((instruction) => {
            const isSelected =
              analysisStore.selectedInstruction?.id === instruction.id;

            const warnings = [
              ...instruction.warnings.map(({ description }) => ({
                title: "Atenção",
                description,
              })),
            ];

            return (
              <View
                key={instruction.id}
                onLayout={({ nativeEvent }) =>
                  onLayout(nativeEvent.layout, instruction.id)
                }
              >
                <InstructionCard
                  title={`#${instruction.step}`}
                  description={instruction.description}
                  warning={warnings}
                  selected={isSelected}
                  setSelected={(state) => onSelected(instruction, state)}
                  status={
                    analysisStore.analysis.find(
                      (item) => item.instructionId === instruction.id
                    )?.status
                  }
                  onAnalysisDone={(status) =>
                    onAnalysisDone(instruction, status)
                  }
                />
              </View>
            );
          })}
      </>
    );
  }
);
