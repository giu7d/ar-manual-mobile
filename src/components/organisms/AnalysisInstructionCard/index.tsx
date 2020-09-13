import React, { useState, useEffect } from "react";

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
  onAnalysisFinished?: (status: "pending" | "success" | "fail") => void;
  initialAnalyzed?: boolean;
  initialStatus?: "pending" | "success" | "fail";
}

export const AnalysisInstructionCard: React.FC<IAnalysisInstructionCardProps> = ({
  title,
  description,
  warning = [],
  selected = false,
  setSelected = () => {},
  onAnalysisFinished = () => {},
  initialAnalyzed = false,
  initialStatus = "pending",
}) => {
  const [status, setStatus] = useState(initialStatus);
  const [analyzed, setAnalyzed] = useState(initialAnalyzed);

  useEffect(() => {
    if (status !== initialStatus) {
      setStatus(initialStatus);
    }

    if (analyzed !== initialAnalyzed) {
      setAnalyzed(initialAnalyzed);
    }
  }, [initialStatus, initialAnalyzed]);

  useEffect(() => {
    if (status !== "pending") {
      setAnalyzed(true);
    } else {
      setAnalyzed(false);
    }
  }, [status]);

  const handleStatusChange = (newStatus: "pending" | "success" | "fail") => {
    setStatus(newStatus);
    onAnalysisFinished(newStatus);
  };

  const handleSelection = () => setSelected(true);

  return (
    <Wrapper onPress={handleSelection}>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
      {selected &&
        warning &&
        warning.map((value, index) => <Warning key={index} {...value} />)}
      {(analyzed || selected) && (
        <ActionsWrapper>
          <Actions status={status} handleStatusChange={handleStatusChange} />
        </ActionsWrapper>
      )}
    </Wrapper>
  );
};
