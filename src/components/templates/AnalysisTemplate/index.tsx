import React from "react";

import { GlobalStyle } from "../../../styles/global";
import { Wrapper } from "./styles";

export const AnalysisTemplate: React.FC = (props) => {
  return (
    <GlobalStyle>
      <Wrapper>{props.children}</Wrapper>
    </GlobalStyle>
  );
};
