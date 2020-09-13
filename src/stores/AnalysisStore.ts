import { observable, action, computed } from "mobx";
import { API } from "../services/mock";
import { Instruction } from "../models/Instruction";
import { CAO } from "../models/CAO";
import { Analysis } from "../models/Analysis";

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
  fetch = () => {
    const data = API.testbenchesById();
    Object.assign(this, data);
    this.selectedInstructionId = data.instructions.find(
      ({ stepNumber }) => stepNumber === 0
    )?.id;
  };

  @action
  selectInstruction = (id: string) => {
    this.selectedInstructionId = id;
  };

  @action
  setAnalysis = (
    { id, ...instruction }: Instruction,
    status: "success" | "fail" | "pending"
  ) => {
    console.log(this.analysis.length);
    if (status !== "pending") {
      this.analysis.push(
        new Analysis({
          id: new Date().toISOString(),
          status,
          instruction: { id, ...instruction },
          completeAt: new Date(),
        })
      );
    } else {
      const existentAnalysisIndex = this.analysis.findIndex(
        ({ instruction }) => instruction.id === id
      );
      this.analysis.splice(existentAnalysisIndex, 1);
    }
  };

  @computed
  get isAnalysisFinished() {
    return this.analysis.length === this.instructions.length;
  }
}
