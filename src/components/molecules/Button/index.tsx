import React from "react";

import { ButtonWrapper, ButtonText } from "../../atoms/Button";
import { ITheme } from "../../../theme";

export interface IButtonProps {
  children: JSX.Element | string;
  onPress?: VoidFunction;
  theme?: ITheme;
  wrapperProps?: Object;
  textProps?: Object;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  theme,
  wrapperProps = {},
  textProps = {},
  onPress = () => {},
}) => {
  return (
    <ButtonWrapper {...Object.assign(wrapperProps, theme)} onPress={onPress}>
      <ButtonText {...Object.assign(textProps, theme)}>{children}</ButtonText>
    </ButtonWrapper>
  );
};
