import React from "react";
import { observer } from "mobx-react";
import { useRoute } from "@react-navigation/native";
import { ModalTemplate } from "../components/templates/ModalTemplate";
import { AnalysisFailureForm } from "../components/containers/AnalysisFailureForm";

export const ReportFailure: React.FC = observer(() => {
  const route = useRoute() as {
    params: { id: string };
  };

  return (
    <ModalTemplate>
      <AnalysisFailureForm testBenchId={route.params.id} />
    </ModalTemplate>
  );
});
