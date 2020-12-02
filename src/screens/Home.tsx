import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

import { WorkbenchCard } from "../components/fragments/WorkbenchCard";
import { HomeTemplate } from "../components/templates/HomeTemplate";
import { useTestBenches } from "../hooks/useTestbenches";

export const Home: React.FC = observer(() => {
  const navigation = useNavigation();

  const { testBenches, isError, isLoading } = useTestBenches();

  const handleAnalysis = (id: string) => {
    navigation.navigate("Analysis", { id });
  };

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <HomeTemplate>
      {testBenches.map((testbench) => (
        <WorkbenchCard
          key={testbench.id}
          componentSeries={testbench.componentSerialNumber}
          workbenchSeries={testbench.testBenchSerialNumber}
          thumbnailSrc={testbench.thumbnailSrc}
          handleAnalysis={() => handleAnalysis(testbench.id)}
        />
      ))}
    </HomeTemplate>
  );
});
