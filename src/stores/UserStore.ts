import { observable, action } from "mobx";
import { API } from "../services/api";
import { User } from "../models/User";
import jwt from "jwt-decode";
import { AccountCoded, adaptUser } from "../adapters/AccountAdapter";

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
  fetch = async (email: string, password: string) => {
    try {
      const { data } = await API.post("/accounts/auth", { email, password });

      const decodedAccount = jwt(data.token) as {
        data: AccountCoded;
      };

      this.user = adaptUser(decodedAccount.data, data.token);

      API.defaults.headers.Authorization = `Bearer ${data.token}`;
    } catch (error) {
      console.log(error);
      this.error = error.message;
    }
  };
}
