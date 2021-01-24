import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useRoute } from "@react-navigation/native";

import { AnalysisCanvas } from "../components/containers/AnalysisCanvas";
import { AnalysisBar } from "../components/containers/AnalysisBar";
import { AnalysisTemplate } from "../components/templates/AnalysisTemplate";
import { useStores } from "../hooks/useStores";
import { useTestBench } from "../hooks/useTestbench";

export const Analysis: React.FC = observer(() => {
  const route = useRoute() as { params: { id: string } };
  const { analysisStore } = useStores();
  const { testBench } = useTestBench(route.params.id);

  useEffect(() => {
    if (testBench && !analysisStore.selectedInstruction) {
      analysisStore.setSelectedInstruction(
        testBench.instructions.find(({ step }) => step === 1)
      );
    }
  });

  return (
    <AnalysisTemplate>
      <AnalysisCanvas testBenchId={route.params.id} />
      <AnalysisBar testBenchId={route.params.id} />
    </AnalysisTemplate>
  );
});
