import jwt from "jwt-decode";
import { observable, action } from "mobx";

import { API } from "../services/api";
import { User } from "../models/User";
import { AccountCoded, adaptUser } from "../adapters/AccountAdapter";

export class UserStore {
  @observable
  status: "pending" | "done" | "error" = "done";

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
  fetch = async (email: string, password: string) => {
    this.status = "pending";
    try {
      const { data } = await API.post("/accounts/auth", { email, password });

      const decodedAccount = jwt(data.token) as {
        data: AccountCoded;
      };

      this.user = adaptUser(decodedAccount.data, data.token);

      API.defaults.headers.Authorization = `Bearer ${data.token}`;
      this.status = "done";
    } catch (error) {
      this.status = "error";
      console.log(error.message);
      this.error = error.message;
    }
  };

  @action
  logout = () => {
    this.user = {
      initial: "",
      name: "",
      email: "",
      token: "",
    };
  };
}
