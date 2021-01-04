import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../fragments/AnalysisBar/Header";
import { FinalAction } from "../../fragments/FinalAction";
import { Typography } from "../../fragments/Typography";
import { useStores } from "../../../hooks/useStores";
import { useTestBench } from "../../../hooks/useTestbench";
import { Wrapper, ScrollWrapper } from "./styles";
import { AnalysisInstructions } from "../AnalysisInstructions";
import ProgressiveScroll from "../ProgressiveScroll";
import { useAnalysis } from "../../../hooks/useAnalysis";
import { useInstructions } from "../../../hooks/useInstructions";

interface IProps {
  testBenchId: string;
}

export const AnalysisBar: React.FC<IProps> = observer(({ testBenchId }) => {
  const navigation = useNavigation();
  const { analysis, finishAnalysis } = useAnalysis();
  const { analysisStore, applicationStore } = useStores();
  const { instructions, isLoading, isError } = useInstructions(testBenchId);

  const handleFinish = async () => {
    await finishAnalysis(testBenchId);
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
          done={analysis.length}
          total={instructions.length}
        />
      )}
      <ScrollWrapper>
        <ProgressiveScroll
          renderItems={(onLayout, toNext) => (
            <>
              <Typography icon="layers">Instructions</Typography>
              <AnalysisInstructions
                testBenchId={testBenchId}
                onLayout={onLayout}
                toNext={toNext}
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
