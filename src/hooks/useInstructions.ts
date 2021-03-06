import { Instruction } from "../models/TestBenchIndexed";
import { useStores } from "./useStores";
import { useTestBench } from "./useTestbench";

export const useInstructions = (testbenchId: string) => {
  const { analysisStore } = useStores();
  const { testBench, isLoading, isError } = useTestBench(testbenchId);

  const isReady = !isError && !isLoading;

  const goToInstruction = (instructionId?: string) => {
    const selectedInstruction = testBench.instructions.find(
      ({ id }) => id === instructionId
    );

    analysisStore.setSelectedInstruction(selectedInstruction);
  };

  const setSelectedInstruction = (instruction: Instruction | undefined) => {
    analysisStore.setSelectedInstruction(instruction);
  };

  return {
    instructions: isReady ? testBench.instructions : [],
    selectedInstruction: analysisStore.selectedInstruction,
    selectedInstructionAt: analysisStore.selectedInstructionAt,
    goToInstruction,
    setSelectedInstruction,
    isLoading,
    isError,
  };
};
