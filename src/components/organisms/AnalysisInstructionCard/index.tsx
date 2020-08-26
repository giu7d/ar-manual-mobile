import React, { useState, useEffect } from "react";

import {
  Wrapper,
  ContentWrapper,
  Title,
  Description,
  WarnWrapper,
  ActionsWrapper,
} from "./styles";
import { Actions } from "./Actions";

export interface IAnalysisInstructionCardProps {
  title: string;
  description: string;
  warning?: Array<{ title: string; description: string }>;
  initialSelected?: boolean;
  initialAnalyzed?: boolean;
  initialStatus?: "pending" | "success" | "fail";
}

export const AnalysisInstructionCard: React.FC<IAnalysisInstructionCardProps> = ({
  title,
  description,
  warning = [],
  initialSelected = false,
  initialAnalyzed = false,
  initialStatus = "pending",
}) => {
  const [status, setStatus] = useState(initialStatus);
  const [selected, setSelected] = useState(initialSelected);
  const [analyzed, setAnalyzed] = useState(initialAnalyzed);

  useEffect(() => {
    if (status !== initialStatus) {
      setStatus(initialStatus);
    }

    if (selected !== initialSelected) {
      setSelected(initialSelected);
    }

    if (analyzed !== initialAnalyzed) {
      setAnalyzed(initialAnalyzed);
    }
  }, [initialStatus, initialSelected, initialAnalyzed]);

  useEffect(() => {
    if (status !== "pending") {
      setAnalyzed(true);
    } else {
      setAnalyzed(false);
    }
  }, [status]);

  const handleStatusChange = (newStatus: "pending" | "success" | "fail") => {
    setStatus(newStatus);
  };

  const handleSelection = () => setSelected(true);

  return (
    <Wrapper selected={selected} onPress={handleSelection}>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
      {selected &&
        warning &&
        warning.map(({ title, description }, index) => (
          <WarnWrapper key={index}>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </WarnWrapper>
        ))}
      {(analyzed || selected) && (
        <ActionsWrapper>
          <Actions status={status} handleStatusChange={handleStatusChange} />
        </ActionsWrapper>
      )}
    </Wrapper>
  );
};
