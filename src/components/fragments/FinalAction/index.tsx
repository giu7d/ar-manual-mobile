import React from "react";
import { useTheme } from "styled-components";

import { Button } from "../Button";

import { Wrapper } from "./styles";

interface IProps {
  disabled?: boolean;
  onFinish?: () => void;
}

export const FinalAction: React.FC<IProps> = ({
  disabled = false,
  onFinish = () => {},
}) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Button
        onPress={onFinish}
        touchableProps={{
          disabled,
          style: {
            alignSelf: "center",
            minWidth: "90%",
            backgroundColor: theme.colors.primary,
            opacity: disabled ? 0.5 : 1,
          },
        }}
        textProps={{
          style: {
            color: theme.colors.foreground,
          },
        }}
      >
        Finalizar
      </Button>
    </Wrapper>
  );
};
