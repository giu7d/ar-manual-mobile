interface IWarning {
  id: string;
  description: string;
}

export class Instruction {
  public id!: string;
  public description!: string;
  public src!: string;
  public nextStep?: string;
  public stepNumber!: number;
  public warning!: Array<IWarning>;

  constructor(props: Instruction) {
    Object.assign(this, props);
  }
}
