import React from "react";
import { Alert, LayoutRectangle, View } from "react-native";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Instruction } from "../../../models/TestBenchIndexed";
import { Analysis } from "../../../models/Analysis";
import { InstructionCard } from "../../fragments/AnalysisBar/InstructionCard";
import { useAnalysis } from "../../../hooks/useAnalysis";
import { useInstructions } from "../../../hooks/useInstructions";
import { useStores } from "../../../hooks/useStores";
import { filterAnalysisByTypeOfInspection } from "../../../utils";

interface IProps {
  testBenchId: string;
  onLayout?: (event: LayoutRectangle, id: string) => void;
  toNext?: (id?: string) => void;
}

export const AnalysisBarInstructions: React.FC<IProps> = observer(
  ({ testBenchId, onLayout = () => {}, toNext = () => {} }) => {
    const navigation = useNavigation();
    const { analysis, addAnalysis, removeAnalysis } = useAnalysis();
    const {
      instructions,
      selectedInstruction,
      selectedInstructionAt,
      setSelectedInstruction,
      goToInstruction,
    } = useInstructions(testBenchId);
    const { analysisStore } = useStores();

    const onSelected = (instruction: Instruction, state: boolean) => {
      if (state) setSelectedInstruction(instruction);
    };

    const onAnalysisDone = async (
      instruction: Instruction,
      status: "approved" | "failure" | "pending"
    ) => {
      if (
        status === "approved" ||
        (status === "failure" &&
          instruction.inspectionType === "GEOMETRIC-INSPECTION")
      ) {
        addAnalysis(
          new Analysis({
            id: uuid.v4(),
            instructionId: instruction.id,
            startedAt: selectedInstructionAt,
            finishedAt: new Date(),
            status,
          })
        );
        goToInstruction(instruction.nextInstructionId);
        toNext(instruction.nextInstructionId);
      }

      if (
        status === "failure" &&
        instruction.inspectionType === "VISUAL-INSPECTION"
      ) {
        navigation.navigate("FailureCamera", { id: testBenchId });
      }

      if (status === "pending") removeAnalysis(instruction.id);
    };

    return (
      <>
        {instructions
          .filter(({ inspectionType }) =>
            filterAnalysisByTypeOfInspection(
              inspectionType,
              analysisStore.analysisType
            )
          )
          .sort((a, b) => a.step - b.step)
          .map((instruction) => {
            const isSelected = selectedInstruction?.id === instruction.id;

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
                  step={instruction.step}
                  title={instruction.title}
                  inspectionType={instruction.inspectionType}
                  description={instruction.description}
                  warning={warnings}
                  selected={isSelected}
                  setSelected={(state) => onSelected(instruction, state)}
                  status={
                    analysis.find(
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
