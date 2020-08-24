import React from "react";
import { TouchableOpacityProps, TextProps } from "react-native";

import { ButtonWrapper, ButtonText } from "./styles";
import { ITheme } from "../../../theme";

export interface IButtonProps {
  children: JSX.Element | string;
  onPress?: VoidFunction;
  theme?: ITheme;
  touchableProps?: TouchableOpacityProps;
  textProps?: TextProps;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  theme,
  touchableProps = {},
  textProps = {},
  onPress = () => {},
}) => {
  return (
    <ButtonWrapper {...Object.assign(touchableProps, theme)} onPress={onPress}>
      <ButtonText {...Object.assign(textProps, theme)}>{children}</ButtonText>
    </ButtonWrapper>
  );
};
