import React from "react";
import { Wrapper, DoneText, TotalText } from "./styles";

interface IProps {
  done: number;
  total: number;
}

export const ProgressConter: React.FC<IProps> = ({ done, total }) => {
  return (
    <Wrapper>
      <DoneText>{done} /</DoneText>
      <TotalText>{total}</TotalText>
    </Wrapper>
  );
};
