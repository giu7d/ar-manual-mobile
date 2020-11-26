import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

import { WorkbenchCard } from "../components/fragments/WorkbenchCard";
import { HomeTemplate } from "../components/templates/HomeTemplate";
import { useStores } from "../hooks/useStores";

export const Home: React.FC = observer(() => {
  const navigation = useNavigation();

  const { testbenchsStore } = useStores();

  useEffect(() => {
    testbenchsStore.fetch();
  }, []);

  const handleAnalysis = (id: string) => {
    navigation.navigate("Analysis", { id });
  };

  return (
    <HomeTemplate>
      {testbenchsStore.testbenchs.map((testbench) => (
        <WorkbenchCard
          key={testbench.id}
          componentSeries={testbench.componentSerialNumber}
          workbenchSeries={testbench.testbenchSerialNumber}
          thumbnailSrc={testbench.thumbnailSrc}
          handleAnalysis={() => handleAnalysis(testbench.id)}
        />
      ))}
    </HomeTemplate>
  );
});
