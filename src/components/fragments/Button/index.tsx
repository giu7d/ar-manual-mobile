import React from "react";
import { TouchableOpacityProps, TextProps } from "react-native";

import { ButtonWrapper, ButtonText } from "./styles";

export interface IButtonProps {
  children: JSX.Element | string;
  onPress?: VoidFunction;
  touchableProps?: TouchableOpacityProps;
  textProps?: TextProps;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  touchableProps = {},
  textProps = {},
  onPress = () => {},
}) => {
  return (
    <ButtonWrapper {...touchableProps} onPress={onPress}>
      <ButtonText {...textProps}>{children}</ButtonText>
    </ButtonWrapper>
  );
};
