import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import {
  Wrapper,
  HeaderWrapper,
  ExtendedIconButton,
  // ActionsWrapper,
} from "./styles";

export interface IAnalysisCanvasProps {
  children: Array<JSX.Element> | JSX.Element;
  handleGoBack?: VoidFunction;
  handleAR?: VoidFunction;
  handleOperatorManual?: VoidFunction;
}

export const AnalysisCanvas: React.FC<IAnalysisCanvasProps> = ({
  children,
  handleGoBack = () => {},
  handleAR = () => {},
  handleOperatorManual = () => {},
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <ExtendedIconButton onPress={handleGoBack}>
          <Icon name="chevron-left" size={24} />
        </ExtendedIconButton>
        {/* <ActionsWrapper>
          <ExtendedIconButton onPress={handleAR}>
            <Icon name="box" size={24} />
          </ExtendedIconButton>
          <ExtendedIconButton onPress={handleOperatorManual}>
            <Icon name="book" size={24} />
          </ExtendedIconButton>
        </ActionsWrapper> */}
      </HeaderWrapper>
      {children}
    </Wrapper>
  );
};
