import { CAO } from "../models/CAO";
import { CAOItem } from "../models/CAOItem";

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
      id: "1",
      testbenchSerialNumber: "C24105974",
      componentSerialNumber: "1697143X",
      cao: new CAO({
        description: "hello world",
        items: [
          new CAOItem({
            id: "0",
            conformity: "a",
            description: "cao 1",
            frequency: "hz",
            method: "idk",
            reforce: "tre",
            serie: "abcd",
          }),

          new CAOItem({
            id: "1",
            conformity: "b",
            description: "cao 2",
            frequency: "hz",
            method: "idk",
            reforce: "tre",
            serie: "abcd",
          }),

          new CAOItem({
            id: "2",
            conformity: "c",
            description: "cao 3",
            frequency: "hz",
            method: "idk",
            reforce: "tre",
            serie: "abcd",
          }),
        ],
      }),
      instructions: [
        {
          id: "a",
          description: "description",
          src: "https://via.placeholder.com/250x150",
          nextStep: "b",
          stepNumber: 0,
          warning: [
            {
              id: "a1",
              description: "I am a warning!",
            },
          ],
        },
        {
          id: "b",
          description: "description",
          src: "https://via.placeholder.com/500x500",
          nextStep: "c",
          stepNumber: 1,
          warning: [
            {
              id: "b1",
              description: "I am another warning",
            },
          ],
        },
        {
          id: "c",
          description: "description",
          src: "https://via.placeholder.com/500x250",
          nextStep: "",
          stepNumber: 2,
          warning: [
            {
              id: "c1",
              description: "I am another warning",
            },
          ],
        },
      ],
    };
  }
}
