import { createContext } from "react";

import { ApplicationStore } from "../stores/ApplicationStore";
import { AnalysisStore } from "../stores/AnalysisStore";

const applicationStore = ApplicationStore();
const analysisStore = AnalysisStore();

export const StoreContext = createContext({
  applicationStore,
  analysisStore,
});
