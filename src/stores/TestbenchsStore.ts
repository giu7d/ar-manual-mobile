import { observable, action } from "mobx";
import { API } from "../services/api";
import { Testbench } from "../models/Testbench";
import { adaptTestbenchs } from "../adapters/TestbenchAdapter";

export class TestbenchsStore {
  @observable
  testbenchs: Testbench[] = [];

  @observable
  error?: string = undefined;

  constructor() {}

  @action
  fetch = async () => {
    try {
      const { data } = await API.get("/testbenches");

      this.testbenchs = adaptTestbenchs(data);
    } catch (error) {
      console.log(error.message);
      this.error = error.message;
    }
  };
}
