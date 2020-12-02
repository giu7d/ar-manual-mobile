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

interface IProps {
  testBenchId: string;
}

export const AnalysisBar: React.FC<IProps> = observer((props) => {
  const navigation = useNavigation();
  const { testBench, isError, isLoading } = useTestBench(props.testBenchId);
  const { analysisStore, applicationStore } = useStores();

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
        <ProgressiveScroll
          renderItems={(onLayout, toNext) => (
            <>
              <Typography icon="layers">Instructions</Typography>
              <AnalysisInstructions
                testBenchId={props.testBenchId}
                onLayout={onLayout}
                toNext={toNext}
              />
              <FinalAction
                onFinish={handleFinish}
                disabled={
                  analysisStore.analysis.length !==
                  testBench.instructions.length
                }
              />
            </>
          )}
        />
      </ScrollWrapper>
    </Wrapper>
  );
});
