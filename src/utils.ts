export const randomValueInRange = (minValue: number, maxValue: number) =>
  Math.floor(minValue + Math.random() * (maxValue - minValue));

export const filterAnalysisByTypeOfInspection = (
  inspectionType: string,
  analysisType?: "visual" | "complete"
) => {
  if (analysisType === "visual") {
    return inspectionType === "VISUAL-INSPECTION";
  }

  return true;
};
