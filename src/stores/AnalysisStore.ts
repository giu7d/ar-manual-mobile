import { makeAutoObservable } from "mobx";
import { Analysis } from "../models/Analysis";

export const AnalysisStore = () =>
  makeAutoObservable({
    analysis: [] as Analysis[],
    startedAt: new Date(),
    finishedAt: new Date(),

    addAnalysis(analysis: Analysis) {
      this.analysis.push(analysis);
    },
    finishAnalysis() {
      console.log("START JOB");
    },
    clear() {
      this.analysis = [];
      this.startedAt = new Date();
      this.finishedAt = new Date();
    },
  });
