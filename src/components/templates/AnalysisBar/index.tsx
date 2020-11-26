import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../fragments/AnalysisBar/Header";
import { InstructionCard } from "../../fragments/AnalysisBar/InstructionCard";
import { FinalAction } from "../../fragments/FinalAction";
import { Typography } from "../../molecules/Typography";
import { useStores } from "../../../hooks/useStores";

import { Wrapper, ScrollWrapper } from "./styles";
import { Instruction } from "../../../models/Instruction";

export const AnalysisBar: React.FC = observer(() => {
  const scrollRef = useRef<ScrollView>(null);
  const [cardYPosition, setCardYPosition] = useState<
    Array<{ id: string; y: number }>
  >([]);
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
    status: "success" | "failure" | "pending"
  ) => {
    if (status === "failure") {
      navigation.navigate("FailureModal", { instruction });
      handleScrollToNextItem(instruction.nextStep);
      return;
    }

    if (status === "success") {
      analysisStore.setAnalysis(instruction, status);
      analysisStore.selectInstruction(instruction.nextStep || undefined);
      handleScrollToNextItem(instruction.nextStep);
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

  const handleScrollToNextItem = (nextItemId?: string) => {
    if (scrollRef.current) {
      if (nextItemId) {
        const card = cardYPosition.find(({ id }) => id === nextItemId);
        if (card) {
          scrollRef.current.scrollTo({ y: card.y - 100, animated: true });
        }
      } else {
        scrollRef.current.scrollToEnd();
      }
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
        <ScrollView ref={scrollRef}>
          <Typography icon="layers">Instructions</Typography>
          {analysisStore.instructions.map((instruction) => (
            <View
              key={instruction.id}
              onLayout={({ nativeEvent }) =>
                setCardYPosition((state) => [
                  ...state,
                  {
                    id: instruction.id,
                    y: nativeEvent.layout.y,
                  },
                ])
              }
            >
              <InstructionCard
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
            </View>
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
