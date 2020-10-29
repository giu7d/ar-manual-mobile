import { Instruction } from "./Instruction";

export interface AnalysisFailure {
  id: string;
  description: string;
  src: string[];
  createdAt: Date;
  caoItemId: string;
}

export class Analysis {
  public id!: string;
  public instruction!: Instruction;
  public status!: "success" | "failure";
  public completeAt!: Date;
  public failure?: AnalysisFailure;

  constructor(props: Analysis) {
    Object.assign(this, props);
  }
}
