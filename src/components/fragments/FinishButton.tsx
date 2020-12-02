import React from "react";
import { useTheme } from "styled-components";
import { Button } from "./Button";

interface IProps {
  children: string;
  error: string | undefined;
  onClick: () => void;
}

export const FinishButton: React.FC<IProps> = (props) => {
  const theme = useTheme();

  return (
    <Button
      onPress={props.onClick}
      touchableProps={{
        style: {
          minHeight: 64,
          backgroundColor: !props.error
            ? theme.colors.danger
            : theme.colors.background,
        },
        disabled: props.error !== undefined,
      }}
    >
      {props.children}
    </Button>
  );
};
