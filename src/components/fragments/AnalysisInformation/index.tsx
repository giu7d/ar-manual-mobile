import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  Wrapper,
  ContentWrapper,
  GroupWrapper,
  Title,
  Description,
} from "./styles";

export interface IAnalysisInformationProps {
  items?: Array<{
    key: string;
    value: string;
  }>;
}

export const AnalysisInformation: React.FC<IAnalysisInformationProps> = ({
  items = [],
}) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Icon name="alert-circle" size={24} color={theme.colors.foreground} />
      <ContentWrapper>
        {items.map(({ key, value }, index) => (
          <GroupWrapper key={index}>
            <Title>{key}</Title>
            <Description>{value}</Description>
          </GroupWrapper>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};
