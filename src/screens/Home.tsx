import uuid from "react-native-uuid";
import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

import { WorkbenchCard } from "../components/fragments/WorkbenchCard";
import { HomeTemplate } from "../components/templates/HomeTemplate";
import { useTestBenches } from "../hooks/useTestbenches";
import { Warning } from "../components/fragments/Warning";
import { WorkBenchCardShimmer } from "../components/fragments/WorkbenchCard/Shimmer";
import { randomValueInRange } from "../utils";
import { useStores } from "../hooks/useStores";

export const Home: React.FC = observer(() => {
  const navigation = useNavigation();
  const { testBenches, isError, isLoading } = useTestBenches();
  const { analysisStore } = useStores();

  const goToAnalysis = (id: string, type: "visual" | "complete") => {
    analysisStore.setAnalysisType(type);
    navigation.navigate("Analysis", { id });
  };

  if (isLoading) {
    return (
      <HomeTemplate>
        {Array(randomValueInRange(2, 5))
          .fill("")
          .map(() => (
            <WorkBenchCardShimmer key={uuid.v4()} />
          ))}
      </HomeTemplate>
    );
  }

  if (isError) {
    return (
      <HomeTemplate>
        <Warning
          title="Error"
          description={`A error happened while loading the test benches.\nMore information:`}
          error={isError?.message}
        />
      </HomeTemplate>
    );
  }

  return (
    <HomeTemplate>
      {testBenches.map((testbench) => (
        <WorkbenchCard
          key={testbench.id}
          componentSeries={testbench.componentSerialNumber}
          workbenchSeries={testbench.testBenchSerialNumber}
          thumbnailSrc={testbench.thumbnailSrc}
          handleAnalysis={(type) => goToAnalysis(testbench.id, type)}
        />
      ))}
    </HomeTemplate>
  );
});
