import React from "react";

import {
  Wrapper,
  ContentWrapper,
  Title,
  Description,
  ActionsWrapper,
} from "./styles";
import { Actions } from "./Actions";
import { Warning, IWarningProps } from "../../molecules/Warning";

export interface IAnalysisInstructionCardProps {
  title: string;
  description: string;
  warning?: Array<IWarningProps>;
  selected?: boolean;
  setSelected?: (state: boolean) => void;
  status?: "pending" | "success" | "fail";
  onAnalysisDone?: (status: "pending" | "success" | "fail") => void;
}

export const AnalysisInstructionCard: React.FC<IAnalysisInstructionCardProps> = ({
  title,
  description,
  warning = [],
  selected = false,
  setSelected = () => {},
  status = "pending",
  onAnalysisDone = () => {},
}) => {
  const handleAnalysis = (newStatus: "pending" | "success" | "fail") => {
    onAnalysisDone(newStatus);
  };

  return (
    <Wrapper onPress={() => setSelected(true)}>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
      {selected &&
        warning &&
        warning.map((value, index) => (
          <Warning
            key={index}
            {...value}
            wrapperProps={{ style: { minWidth: "80%" } }}
          />
        ))}
      {selected && (
        <ActionsWrapper>
          <Actions status={status} handleStatusChange={handleAnalysis} />
        </ActionsWrapper>
      )}
    </Wrapper>
  );
};
