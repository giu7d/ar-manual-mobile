import { observable, action } from "mobx";
import { API } from "../services/mock";
import { Instruction } from "../models/Instruction";
import { CAO } from "../models/CAO";

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
  analysis = [];

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
}
