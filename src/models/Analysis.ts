import { Failure } from "./Failure";

export class Analysis {
  public id!: string;
  public instructionId!: string;
  public status!: "success" | "failure";
  public failure?: Failure;
  public startedAt!: Date;
  public finishedAt!: Date;

  constructor(props: Analysis) {
    Object.assign(this, props);
  }
}
