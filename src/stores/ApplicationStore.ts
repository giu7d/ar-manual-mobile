import jwt from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { Account } from "../models/Account";

type CanvasType = "photo" | "3D";

interface IApplicationStore {
  account?: Account;
  setAccount(account: Account): void;
  canvasMode: CanvasType;
  setCanvasMode(state: CanvasType): void;
  clear(): void;
}

export const ApplicationStore = () =>
  makeAutoObservable<IApplicationStore>({
    account: undefined,
    setAccount(account: Account) {
      this.account = account;
    },
    canvasMode: "photo",
    setCanvasMode(state) {
      this.canvasMode = state;
    },
    clear() {
      this.account = undefined;
    },
  });
