import jwt from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { Account } from "../models/Account";

export const ApplicationStore = () =>
  makeAutoObservable({
    canvasMode: "3d" as "photo" | "3d",
    account: null as Account | null,
    setAccount(token: string) {
      const { data } = jwt(token);
      this.account = new Account({ ...data });
    },
    clear() {
      this.account = null;
    },
    setCanvasMode(state: "photo" | "3d") {
      this.canvasMode = state;
    },
  });
