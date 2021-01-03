import { useStores } from "./useStores";
import { useTestBench } from "./useTestbench";

export const useInstructions = (testbenchId: string) => {
  const { testBench, isLoading, isError } = useTestBench(testbenchId);
  const { analysisStore } = useStores();

  const isReady = !isError && !isLoading;

  const goToInstruction = (instructionId?: string) => {
    const selectedInstruction = testBench.instructions.find(
      ({ id }) => id === instructionId
    );

    analysisStore.setSelectedInstruction(selectedInstruction);
  };

  return {
    instructions: isReady ? testBench.instructions : [],
    selectedInstruction: analysisStore.selectedInstruction,
    selectedInstructionAt: analysisStore.selectedInstruction,
    goToInstruction,
    isLoading,
    isError,
  };
};
