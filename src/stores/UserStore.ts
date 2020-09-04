import { observable, action } from "mobx";
import { API } from "../services/mock";
import { User } from "../models/User";

export class UserStore {
  @observable
  user: User = {
    initial: "",
    name: "",
    email: "",
    token: "",
  };

  @observable
  error?: string = undefined;

  constructor() {}

  @action
  fetch = (email: string, password: string) => {
    try {
      this.user = API.authenticate();
    } catch (error) {
      this.error = error.message;
    }
  };
}
