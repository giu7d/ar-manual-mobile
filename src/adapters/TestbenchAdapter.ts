import { CAO } from "../models/CAO";
import { CAOItem } from "../models/CAOItem";
import { Instruction } from "../models/Instruction";
import { Testbench } from "../models/Testbench";

export interface TestbenchItem {
  id: string;
  testBenchSerialNumber: string;
  componentSerialNumber: string;
  isActive: boolean;
}

export interface IndexedTestbench {
  id: string;
  testBenchSerialNumber: string;
  componentSerialNumber: string;
  cao: {
    id: string;
    description: string;
    items: {
      id: string;
      description: string;
      frequency: string;
      series: string;
      reforce: string;
      method: string;
      conformity: string;
    }[];
  };
  instructions: {
    id: string;
    testBenchId: string;
    description: string;
    step: number;
    nextInstructionId?: string;
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
  }[];
}

export function adaptTestbenchs(data: TestbenchItem[]) {
  return data.map(
    ({ id, componentSerialNumber, testBenchSerialNumber }) =>
      new Testbench({
        id,
        componentSerialNumber,
        testbenchSerialNumber: testBenchSerialNumber,
        thumbnailSrc: "https://via.placeholder.com/250x250",
      })
  );
}

export function adaptTestbench(data: IndexedTestbench) {
  return {
    id: data.id,
    testbenchSerialNumber: data.testBenchSerialNumber,
    componentSerialNumber: data.componentSerialNumber,
    cao: new CAO({
      description: data.cao.description,
      items: data.cao.items.map(
        (item) =>
          new CAOItem({
            ...item,
            serie: item.series,
          })
      ),
    }),
    instructions: data.instructions
      .map(
        (item) =>
          new Instruction({
            id: item.id,
            description: item.description,
            stepNumber: item.step,
            nextStep: item.nextInstructionId,
            src: item.sources[0].src,
            warning: item.warnings.map((warning) => ({
              id: warning.id,
              description: warning.description,
            })),
          })
      )
      .sort((present, next) => present.stepNumber - next.stepNumber),
    selectedInstructionId: data.instructions.filter(
      (instruction) => instruction.step === 1
    ),
  };
}
