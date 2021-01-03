import { Analysis } from "../models/Analysis";
import { persistAnalysis } from "../services/api";
import { useStores } from "./useStores";

export const useAnalysis = () => {
  const { analysisStore } = useStores();

  const addAnalysis = (analyze: Analysis) => {
    const analysis = [...analysisStore.analysis, analyze];

    analysisStore.setAnalysis(analysis);
  };

  const removeAnalysis = (instructionId: string) => {
    const analysis = [...analysisStore.analysis];
    const index = analysis.findIndex(
      (analysis) => analysis.instructionId === instructionId
    );

    if (index !== -1) {
      analysis.splice(index, 1);
    }

    analysisStore.setAnalysis(analysis);
  };

  const finishAnalysis = async (testBenchId: string) => {
    try {
      const finishedAt = new Date();
      const { analysis, startedAt } = analysisStore;
      const status = await persistAnalysis(testBenchId, {
        analysis,
        startedAt,
        finishedAt,
      });
      console.log("finishAnalysis", "success", status);
    } catch (error) {
      console.log("finishAnalysis", "error", error);
    }
  };

  return {
    analysis: analysisStore.analysis,
    addAnalysis,
    removeAnalysis,
    finishAnalysis,
  };
};
