import { createContext } from "react";
import { GlobalStore } from "../stores/GlobalStore";

export const storesContext = createContext({
  globalStore: new GlobalStore(),
});
