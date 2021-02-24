export interface CAOItem {
  id: string;
  description: string;
  frequency: string;
  series: string;
  reforce: string;
  method: string;
  conformity: string;
}
export interface CAO {
  id: string;
  description: string;
  items: CAOItem[];
}

export interface Instruction {
  id: string;
  testBenchId: string;
  title: string;
  description: string;
  step: number;
  nextInstructionId?: string;
  inspectionType: "VISUAL-INSPECTION" | "GEOMETRIC-INSPECTION";
  isActive: boolean;
  sources: {
    id: string;
    instructionId: string;
    type: string;
    src: string;
  }[];
  warnings: {
    id: string;
    instructionId: string;
    description: string;
    createdAt: Date;
  }[];
}

export class TestBenchIndexed {
  id!: string;
  testBenchSerialNumber!: string;
  componentSerialNumber!: string;
  cao!: CAO;
  instructions!: Instruction[];

  constructor(props: TestBenchIndexed) {
    Object.assign(this, props);
  }
}
