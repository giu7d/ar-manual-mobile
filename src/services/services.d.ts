type IAuthenticationResponse = {
  token: string;
};

type IImageUploadResponse = {
  url: string[];
};

type ITestbenchesResponse = {
  id: string;
  testBenchSerialNumber: string;
  componentSerialNumber: string;
  thumbnailSrc: string;
  isActive: boolean;
};

type ITestbenchResponse = {
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
};
