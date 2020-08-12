import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Wrapper, Header, Actions } from "./styles";
import { IconButton } from "../../components/IconButton";
import { ITheme } from "../../theme";

interface IAnalysisCanvasProps {
  children: JSX.Element;
  handleGoBack?: VoidFunction;
  handleAR?: VoidFunction;
  handleOperatorManual?: VoidFunction;
}

const AnalysisCanvas: React.FC<IAnalysisCanvasProps> = ({
  children,
  handleGoBack,
  handleAR,
  handleOperatorManual,
}) => {
  const theme = useTheme() as ITheme;

  return (
    <Wrapper>
      <Header>
        <IconButton
          onPress={handleGoBack}
          style={{
            backgroundColor: theme.colors.foreground,
            opacity: 0.5,
          }}
        >
          <Icon name="chevron-left" size={24} />
        </IconButton>

        <Actions>
          <IconButton
            onPress={handleAR}
            style={{
              marginHorizontal: 24,
              backgroundColor: theme.colors.foreground,
              opacity: 0.5,
            }}
          >
            <Icon name="box" size={24} />
          </IconButton>
          <IconButton
            onPress={handleOperatorManual}
            style={{
              backgroundColor: theme.colors.foreground,
              opacity: 0.5,
            }}
          >
            <Icon name="book" size={24} />
          </IconButton>
        </Actions>
      </Header>
      {children}
    </Wrapper>
  );
};

AnalysisCanvas.defaultProps = {
  handleGoBack: () => {},
  handleAR: () => {},
  handleOperatorManual: () => {},
};

export { AnalysisCanvas, IAnalysisCanvasProps };
