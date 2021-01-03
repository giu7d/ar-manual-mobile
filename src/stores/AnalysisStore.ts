import { makeAutoObservable } from "mobx";
import { Analysis } from "../models/Analysis";
import { Instruction } from "../models/TestBenchIndexed";

interface IAnalysisStore {
  analysis: Analysis[];
  setAnalysis(analysis: Analysis[]): void;
  selectedInstruction?: Instruction;
  selectedInstructionAt: Date;
  startedAt: Date;
  setSelectedInstruction(instruction: Instruction | undefined): void;
  clear(): void;
}

export const AnalysisStore = () =>
  makeAutoObservable<IAnalysisStore>({
    analysis: [],
    setAnalysis(analysis) {
      this.analysis = analysis;
    },
    selectedInstruction: undefined,
    selectedInstructionAt: new Date(),
    startedAt: new Date(),
    setSelectedInstruction(instruction) {
      this.selectedInstruction = instruction;
      this.selectedInstructionAt = new Date();
    },
    clear() {
      this.analysis = [];
      this.selectedInstruction = undefined;
      this.startedAt = new Date();
    },
  });
