import React from "react";
import { ViewProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Wrapper,
  Title,
  Description,
  ContentWrapper,
  AdditionalDescription,
} from "./styles";
import { useTheme } from "styled-components";

export interface IWarningProps {
  icon: string;
  title: string;
  description: string;
  additionalDescription?: string;
  wrapperProps?: ViewProps;
}

export const Information: React.FC<IWarningProps> = ({
  icon,
  title,
  description,
  additionalDescription,
  wrapperProps = {},
}) => {
  const theme = useTheme();

  return (
    <Wrapper {...wrapperProps}>
      <Icon name={icon} size={54} color={theme.colors.success} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {additionalDescription && (
          <AdditionalDescription>{additionalDescription}</AdditionalDescription>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};
