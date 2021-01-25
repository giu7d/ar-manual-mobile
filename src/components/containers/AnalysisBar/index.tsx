import React, { useCallback } from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

import { ProgressiveScroll } from "./ProgressiveScroll";
import { Header } from "../../fragments/AnalysisBar/Header";
import { FinalAction } from "../../fragments/FinalAction";
import { Typography } from "../../fragments/Typography";
import { useStores } from "../../../hooks/useStores";
import { Wrapper, ScrollWrapper } from "./styles";
import { AnalysisBarInstructions } from "./Instructions";
import { useAnalysis } from "../../../hooks/useAnalysis";
import { useInstructions } from "../../../hooks/useInstructions";
import { InstructionCardShimmer } from "../../fragments/AnalysisBar/InstructionCard/Shimmer";
import uuid from "react-native-uuid";
import { randomValueInRange } from "../../../utils";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Warning } from "../../fragments/Warning";

interface IProps {
  testBenchId: string;
}

export const AnalysisBar: React.FC<IProps> = observer(({ testBenchId }) => {
  const navigation = useNavigation();
  const { analysis, finishAnalysis } = useAnalysis();
  const { analysisStore } = useStores();
  const { instructions, isLoading, isError } = useInstructions(testBenchId);

  const handleFinish = async () => {
    await finishAnalysis(testBenchId);
    analysisStore.clear();
    navigation.navigate("Home");
  };

  if (isLoading) {
    return (
      <Wrapper>
        <Header done={0} total={0} />
        <ScrollWrapper>
          <ScrollView>
            <Typography icon="layers">Instructions</Typography>
            {Array(randomValueInRange(3, 5))
              .fill("")
              .map(() => (
                <View key={uuid.v4()}>
                  <InstructionCardShimmer />
                </View>
              ))}
          </ScrollView>
        </ScrollWrapper>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <ScrollWrapper>
          <Warning
            title="Error"
            description={`A error happened while loading the test benches.\nMore information:`}
            error={isError?.message}
          />
        </ScrollWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header done={analysis.length} total={instructions.length} />
      <ScrollWrapper>
        <ProgressiveScroll
          renderItems={(onLayout, toNext) => (
            <>
              <Typography icon="layers">Instructions</Typography>
              <AnalysisBarInstructions
                testBenchId={testBenchId}
                onLayout={onLayout}
              />
              <FinalAction
                onFinish={handleFinish}
                disabled={analysis.length !== instructions.length}
              />
            </>
          )}
        />
      </ScrollWrapper>
    </Wrapper>
  );
});
