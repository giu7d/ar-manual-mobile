import { observable, action } from "mobx";
import { API } from "../services/mock";
import { Testbench } from "../models/Testbench";

export class TestbenchsStore {
  @observable
  testbenchs: Testbench[] = [];

  @observable
  error?: string = undefined;

  constructor() {}

  @action
  fetch = async () => {
    try {
      this.testbenchs = API.testbenches();
    } catch (error) {
      this.error = error.message;
    }
  };
}
