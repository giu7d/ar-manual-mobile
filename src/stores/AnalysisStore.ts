import { makeAutoObservable } from "mobx";
import { Analysis } from "../models/Analysis";
import { Instruction } from "../models/TestBenchIndexed";

export const AnalysisStore = () =>
  makeAutoObservable({
    analysis: [] as Analysis[],
    selectedInstruction: null as Instruction | null,
    selectedInstructionAt: new Date(),
    startedAt: new Date(),
    finishedAt: null as Date | null,
    addAnalysis(analysis: Analysis) {
      this.analysis.push(analysis);
    },
    removeAnalysis(instructionId: string) {
      const index = this.analysis.findIndex(
        (analysis) => analysis.instructionId === instructionId
      );

      if (index !== -1) {
        this.analysis.splice(index, 1);
      }
    },
    finishAnalysis() {
      this.finishedAt = new Date();
      console.log("START JOB");
    },
    setSelectedInstruction(instruction: Instruction | null) {
      this.selectedInstruction = instruction;
      this.selectedInstructionAt = new Date();
    },
    clear() {
      this.analysis = [];
      this.selectedInstruction = null;
      this.startedAt = new Date();
      this.finishedAt = null;
    },
  });
