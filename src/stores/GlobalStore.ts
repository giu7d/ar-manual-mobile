import { observable, action } from "mobx";
import { v4 as uuid } from "uuid";

export interface IGlobalStore {
  user: {
    name: string;
    email: string;
    token: string;
    error?: string;
  };
}

export class GlobalStore implements IGlobalStore {
  @observable
  user = {
    name: "",
    email: "",
    token: "",
    error: undefined,
  };

  constructor() {}

  @action
  fetchUser = (email: string, password: string) => {
    this.user = {
      ...this.user,
      name: "Giuseppe",
      email: email,
      token: uuid(),
    };
  };
}
