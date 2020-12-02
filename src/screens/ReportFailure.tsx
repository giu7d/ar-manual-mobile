import React from "react";
import { observer } from "mobx-react";
import { useRoute } from "@react-navigation/native";
import { ModalTemplate } from "../components/templates/ModalTemplate";
import { AnalysisFailureReportForm } from "../components/containers/AnalysisFailureReportForm";

export const ReportFailure: React.FC = observer(() => {
  const route = useRoute() as {
    params: { id: string };
  };

  return (
    <ModalTemplate>
      <AnalysisFailureReportForm testBenchId={route.params.id} />
    </ModalTemplate>
  );
});
