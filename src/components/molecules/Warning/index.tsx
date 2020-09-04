import React from "react";
import { Wrapper, Title, Description } from "./styles";

export interface IWarningProps {
  title: string;
  description: string;
}

export const Warning: React.FC<IWarningProps> = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};
