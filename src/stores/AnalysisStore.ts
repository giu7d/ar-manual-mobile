import { observable, action, computed } from "mobx";
import { API } from "../services/mock";
import { Instruction } from "../models/Instruction";
import { CAO } from "../models/CAO";
import { Analysis, AnalysisFailure } from "../models/Analysis";

export class AnalysisStore {
  @observable
  id: string = "";

  @observable
  testbenchSerialNumber: string = "";

  @observable
  componentSerialNumber: string = "";

  @observable
  instructions: Instruction[] = [];

  @observable
  selectedInstructionId?: string = undefined;

  @observable
  error?: string = undefined;

  @observable
  cao?: CAO = undefined;

  @observable
  analysis: Analysis[] = [];

  constructor() {}

  @action
  fetch = async (id: string) => {
    try {
      console.log(`> Fetch: ${id}`);
      const data = API.testbenchesById();

      Object.assign(this, data);

      this.selectedInstructionId = data.instructions.find(
        ({ stepNumber }) => stepNumber === 0
      )?.id;
    } catch (error) {
      console.log(error);
      this.error = error.message;
    }
  };

  @action
  selectInstruction = (id: string) => {
    this.selectedInstructionId = id;
  };

  @action
  setAnalysis = (
    { id, ...instruction }: Instruction,
    status: "success" | "fail" | "pending",
    failure: AnalysisFailure | undefined = undefined
  ) => {
    if (status !== "pending") {
      const analysis = new Analysis({
        id: new Date().toISOString(),
        status,
        instruction: { id, ...instruction },
        completeAt: new Date(),
      });

      analysis.failure = failure;

      this.analysis.push(analysis);
    } else {
      const existentAnalysisIndex = this.analysis.findIndex(
        ({ instruction }) => instruction.id === id
      );
      this.analysis.splice(existentAnalysisIndex, 1);
    }
  };

  @action
  finishAnalysis = async () => {
    console.log("> Analysis Finished");
  };

  @computed
  get isAnalysisFinished() {
    return this.analysis.length === this.instructions.length;
  }

  @computed
  get selectedInstruction() {
    return this.instructions.find(
      ({ id }) => this.selectedInstructionId === id
    );
  }
}
