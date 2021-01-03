import jwt from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { Account } from "../models/Account";

type CanvasType = "photo" | "3D";

interface IApplicationStore {
  account?: Account;
  setAccount(token: string): void;
  canvasMode: CanvasType;
  setCanvasMode(state: CanvasType): void;
  clear(): void;
}

export const ApplicationStore = () =>
  makeAutoObservable<IApplicationStore>({
    account: undefined,
    setAccount(token) {
      const { data } = jwt(token);
      this.account = new Account({ ...data });
    },
    canvasMode: "photo",
    setCanvasMode(state) {
      this.canvasMode = state;
    },
    clear() {
      this.account = undefined;
    },
  });
