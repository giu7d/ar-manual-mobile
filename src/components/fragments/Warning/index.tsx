import React from "react";
import { ViewProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Wrapper, Title, Description, Error, ContentWrapper } from "./styles";
import { useTheme } from "styled-components";

export interface IWarningProps {
  title: string;
  description: string;
  error?: string;
  wrapperProps?: ViewProps;
}

export const Warning: React.FC<IWarningProps> = ({
  title,
  description,
  error,
  wrapperProps = {},
}) => {
  const theme = useTheme();

  return (
    <Wrapper {...wrapperProps}>
      <Icon name="alert-triangle" size={38} color={theme.colors.danger} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {error && <Error>{error}</Error>}
      </ContentWrapper>
    </Wrapper>
  );
};
