import { makeAutoObservable } from "mobx";
import { Account } from "../models/Account";
import Constants from "expo-constants";

const { RENDER_MODE } = Constants.manifest.extra;

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
    canvasMode: RENDER_MODE || "photo",
    setCanvasMode(state) {
      this.canvasMode = state;
    },
    clear() {
      this.account = undefined;
    },
  });
