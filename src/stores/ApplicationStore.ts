import jwt from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { Account } from "../models/Account";

export const ApplicationStore = () =>
  makeAutoObservable({
    account: null as Account | null,
    setAccount(token: string) {
      const { data } = jwt(token);
      this.account = new Account({ ...data });
    },
    clear() {
      this.account = null;
    },
  });
