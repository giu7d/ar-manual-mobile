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
        id: "0",
        thumbnailSrc: "https://via.placeholder.com/250x250",
        testbenchSerialNumber: "C24105974",
        componentSerialNumber: "1697143X",
      },
      {
        id: "1",
        thumbnailSrc: "https://via.placeholder.com/250x250",
        testbenchSerialNumber: "C24105974",
        componentSerialNumber: "1697143X",
      },
      {
        id: "2",
        thumbnailSrc: "https://via.placeholder.com/250x250",
        testbenchSerialNumber: "C24105974",
        componentSerialNumber: "1697143X",
      },
      {
        id: "3",
        thumbnailSrc: "https://via.placeholder.com/250x250",
        testbenchSerialNumber: "C24105974",
        componentSerialNumber: "1697143X",
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
