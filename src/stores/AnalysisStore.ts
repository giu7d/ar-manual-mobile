import { observable, action, computed } from "mobx";
import { API } from "../services/api";
import { Instruction } from "../models/Instruction";
import { CAO } from "../models/CAO";
import { Analysis, AnalysisFailure } from "../models/Analysis";
import { adaptTestbench } from "../adapters/TestbenchAdapter";

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
      const { data } = await API.get(`/testbenches/${id}`);
      const adaptedState = adaptTestbench(data);
      Object.assign(this, adaptedState);

      this.selectedInstructionId = adaptedState.instructions.find(
        (instruction) => instruction.stepNumber === 1
      )?.id;
      this.startedAt = new Date();
    } catch (error) {
      console.log(error.message);
      this.error = error.message;
    }
  };

  @action
  selectInstruction = (id: string | undefined) => {
    if (id) {
      this.selectedInstructionId = id;
    } else {
      this.selectedInstructionId = undefined;
    }
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
    try {
      const failLength = this.analysis.filter(({ status }) => status === "fail")
        .length;

      const payload = {
        status: failLength === 0 ? "approved" : "failure",
        startedAt: this.startedAt,
        finishedAt: new Date(),
        steps: this.analysis.map(
          ({ instruction, status, completeAt, failure }) => ({
            instructionId: instruction.id,
            status,
            startedAt: new Date(),
            finishedAt: completeAt,
            failure: failure
              ? {
                  description: failure.description,
                  src: failure.src,
                  caoItemId: failure.caoItemId,
                }
              : undefined,
          })
        ),
      };

      await API.post("/analysis", payload, {
        headers: {
          testbenchid: this.id,
        },
      });
      console.log("> Analysis Done!");
      this.clear();
    } catch (error) {
      console.log("> Analysis Error!");
      console.log(error.message);
    }
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
