export class API {
  static authenticate(error: boolean = false) {
    if (error) throw new Error("Error!");

    return {
      initial: "G",
      name: "Giuseppe Setem",
      email: "giuseppe@dev.com",
      token: "a1n4g2hB4",
    };
  }

  static testbenches(error: boolean = false) {
    if (error) throw new Error("Error!");

    return [
      {
        id: "",
        thumbnailSrc: "",
        testbenchSerialNumber: "",
        componentSerialNumber: "",
      },
      {
        id: "",
        thumbnailSrc: "",
        testbenchSerialNumber: "",
        componentSerialNumber: "",
      },
      {
        id: "",
        thumbnailSrc: "",
        testbenchSerialNumber: "",
        componentSerialNumber: "",
      },
      {
        id: "",
        thumbnailSrc: "",
        testbenchSerialNumber: "",
        componentSerialNumber: "",
      },
    ];
  }

  static testbenchesById(error: boolean = false) {
    if (error) throw new Error("Error!");

    return {
      id: "",
      testbenchSerialNumber: "",
      componentSerialNumber: "",
      cao: {},
      instructions: [
        {
          id: "a",
          description: "",
          src: "",
          nextStep: "b",
          stepNumber: 0,
          warning: [
            {
              id: "",
              description: "",
            },
          ],
        },
        {
          id: "b",
          description: "",
          src: "",
          nextStep: "",
          stepNumber: 1,
          warning: [
            {
              id: "",
              description: "",
            },
          ],
        },
      ],
    };
  }
}
