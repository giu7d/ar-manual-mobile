import { Analysis } from "../models/Analysis";
import { persistAnalysis } from "../services/api";
import { useStores } from "./useStores";

export const useAnalysis = () => {
  const { analysisStore } = useStores();

  const isApproved = () => {
    return (
      analysisStore.analysis.filter(({ status }) => status === "failure")
        .length === 0
    );
  };

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
      const { analysis, startedAt } = analysisStore;
      const finishedAt = new Date();

      const status = await persistAnalysis(testBenchId, {
        analysis,
        startedAt,
        finishedAt,
      });

      console.log("finishAnalysis", "success", status);
    } catch (error) {
      console.log("finishAnalysis", "error", error.message);
    }
  };

  return {
    analysis: analysisStore.analysis,
    isApproved,
    addAnalysis,
    removeAnalysis,
    finishAnalysis,
  };
};
