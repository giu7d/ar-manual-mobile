import { CAOItem } from "./CAOItem";
import { Instruction } from "./Instruction";

interface AnalysisFailure {
  id: string;
  description: string;
  src: string;
  createdAt: Date;
  caoItem: CAOItem;
}

export class Analysis {
  public id!: string;
  public instruction!: Instruction;
  public status!: "success" | "fail";
  public completeAt!: Date;
  public failure?: AnalysisFailure;

  constructor(props: Analysis) {
    Object.assign(this, props);
  }
}
