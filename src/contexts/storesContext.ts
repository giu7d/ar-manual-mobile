import { createContext } from "react";
import { UserStore } from "../stores/UserStore";
import { TestbenchsStore } from "../stores/TestbenchsStore";
import { AnalysisStore } from "../stores/AnalysisStore";

export const storesContext = createContext({
  userStore: new UserStore(),
  testbenchsStore: new TestbenchsStore(),
  analysisStore: new AnalysisStore(),
});
