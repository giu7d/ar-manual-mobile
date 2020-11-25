import React from "react";

import { GlobalStyle } from "../../../styles/global";
import { AnalysisBar } from "../AnalysisBar";
import { Wrapper } from "./styles";

export const AnalysisTemplate: React.FC = (props) => {
  return (
    <GlobalStyle>
      <Wrapper>
        {props.children}
        <AnalysisBar />
      </Wrapper>
    </GlobalStyle>
  );
};
