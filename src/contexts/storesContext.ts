import { createContext } from "react";
import { UserStore } from "../stores/UserStore";
import { TestbenchsStore } from "../stores/TestbenchsStore";

export const storesContext = createContext({
  userStore: new UserStore(),
  testbenchsStore: new TestbenchsStore(),
});
