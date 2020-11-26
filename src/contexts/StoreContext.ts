import { createContext } from "react";

import { ApplicationStore } from "../stores/ApplicationStore";
import { AnalysisStore } from "../stores/AnalysisStore";
import { FailureStore } from "../stores/FailureStore";

const applicationStore = ApplicationStore();
const analysisStore = AnalysisStore();
const failureStore = FailureStore();

export const StoreContext = createContext({
  applicationStore,
  analysisStore,
  failureStore,
});
