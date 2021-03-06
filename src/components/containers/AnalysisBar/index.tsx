import React from "react";
import { Alert, Linking, View } from "react-native";
import { observer } from "mobx-react";
import uuid from "react-native-uuid";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { InstructionCardShimmer } from "../../fragments/AnalysisBar/InstructionCard/Shimmer";
import { Header } from "../../fragments/AnalysisBar/Header";
import { FinalAction } from "../../fragments/FinalAction";
import { Typography } from "../../fragments/Typography";
import { Warning } from "../../fragments/Warning";
import { useInstructions } from "../../../hooks/useInstructions";
import { useAnalysis } from "../../../hooks/useAnalysis";
import { useStores } from "../../../hooks/useStores";
import {
  filterAnalysisByTypeOfInspection,
  randomValueInRange,
} from "../../../utils";
import { ProgressiveScroll } from "./ProgressiveScroll";
import { Wrapper, ScrollWrapper } from "./styles";
import { AnalysisBarInstructions } from "./Instructions";

const { SURVEY_ENABLE, SURVEY_URL = "" } = Constants.manifest.extra;

interface IProps {
  testBenchId: string;
}

export const AnalysisBar: React.FC<IProps> = observer(({ testBenchId }) => {
  const navigation = useNavigation();
  const { analysis, finishAnalysis, isApproved } = useAnalysis();
  const { analysisStore } = useStores();
  const { instructions, isLoading, isError } = useInstructions(testBenchId);

  const handleFinish = async () => {
    await finishAnalysis(testBenchId);
    const endDate = new Date();

    if (isApproved()) {
      Alert.alert(
        "OK!",
        `
Não detectada nenhuma inconformidade. Prossiga.

A inspeção foi finalizada às ${endDate.toLocaleTimeString(
          "pt"
        )} na data ${endDate.toLocaleDateString("pt")}.
`,
        [
          {
            onPress: _exit,
          },
        ]
      );
    } else {
      Alert.alert(
        "NOT OK!",
        `
Foram detectadas não conformidades com as tolerâncias definidas, seguir as regras de paragem ao defeito expostas na linha.

As seguintes inconformidades foram detectadas:\n${generateSummary().map(
          (instruction) => `${instruction?.title}\n`
        )}

A inspeção foi finalizada às ${endDate.toLocaleTimeString(
          "pt"
        )} na data ${endDate.toLocaleDateString("pt")}.
`,
        [
          {
            onPress: _exit,
          },
        ]
      );
    }
  };

  const generateSummary = () => {
    const reprovedInstructions = analysis
      .filter((el) => el.status === "failure")
      .map((el) => instructions.find(({ id }) => id === el.instructionId))
      .filter((el) => el !== undefined);

    return reprovedInstructions;
  };

  const _exit = () => {
    analysisStore.clear();
    navigation.navigate("Home");
    if (SURVEY_ENABLE) Linking.openURL(SURVEY_URL);
  };

  const getInstructionsLength = () => {
    return instructions.filter(({ inspectionType }) =>
      filterAnalysisByTypeOfInspection(
        inspectionType,
        analysisStore.analysisType
      )
    ).length;
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
      <Header done={analysis.length} total={getInstructionsLength()} />
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
                disabled={analysis.length !== getInstructionsLength()}
              />
            </>
          )}
        />
      </ScrollWrapper>
    </Wrapper>
  );
});
