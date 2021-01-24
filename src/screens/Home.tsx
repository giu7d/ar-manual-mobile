import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

import { WorkbenchCard } from "../components/fragments/WorkbenchCard";
import { HomeTemplate } from "../components/templates/HomeTemplate";
import { useTestBenches } from "../hooks/useTestbenches";
import { Warning } from "../components/fragments/Warning";

export const Home: React.FC = observer(() => {
  const navigation = useNavigation();
  const { testBenches, isError, isLoading } = useTestBenches();

  const goToAnalysis = (id: string) => {
    navigation.navigate("Analysis", { id });
  };

  if (isLoading) {
    return <Text>Loading</Text>;
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
          handleAnalysis={() => goToAnalysis(testbench.id)}
        />
      ))}
    </HomeTemplate>
  );
});
