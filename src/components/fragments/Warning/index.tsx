import React from "react";
import { ViewProps } from "react-native";
import { Wrapper, Title, Description } from "./styles";

export interface IWarningProps {
  title: string;
  description: string;
  wrapperProps?: ViewProps;
}

export const Warning: React.FC<IWarningProps> = ({
  title,
  description,
  wrapperProps = {},
}) => {
  return (
    <Wrapper {...wrapperProps}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};
