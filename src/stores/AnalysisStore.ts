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
    Object.assign(this, API.testbenchesById());
  };
}
