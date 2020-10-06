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

  @observable
  startedAt: Date = new Date();

  @observable
  finishedAt: Date = new Date();

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
      this.startedAt = new Date();
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
    this.finishedAt = new Date();
    const timeDiferenceDataNumber =
      this.finishedAt?.getTime() - this.startedAt?.getTime();

    const timeDiference = new Date(timeDiferenceDataNumber).toLocaleTimeString(
      "en-GB",
      {
        timeZone: "UTC",
      }
    );

    console.log(`
> REPORT
  general:
    startedAt: ${this.startedAt?.toLocaleString("en-GB", {
      timeZone: "UTC",
    })}
    finishedAt: ${this.finishedAt?.toLocaleString("en-GB", {
      timeZone: "UTC",
    })}
    timeDiference: ${timeDiference}
  instructions: 
    qtd: ${this.instructions.length}
  analysis:
    qtd: ${this.analysis.length}
    successful: ${
      this.analysis.filter(({ status }) => status === "success").length
    }
    fail: ${this.analysis.filter(({ status }) => status === "fail").length}
    `);
    this.clear();
  };

  @action
  clear = async () => {
    this.id = "";
    this.testbenchSerialNumber = "";
    this.componentSerialNumber = "";
    this.instructions = [];
    this.selectedInstructionId = undefined;
    this.error = undefined;
    this.cao = undefined;
    this.analysis = [];
    this.startedAt = new Date();
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
