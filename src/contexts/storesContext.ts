import { createContext } from "react";
import { UserStore } from "../stores/UserStore";

export const storesContext = createContext({
  userStore: new UserStore(),
});
