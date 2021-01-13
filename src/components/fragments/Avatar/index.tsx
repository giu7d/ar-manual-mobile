import React from "react";
import { TouchableOpacityProps } from "react-native";
import { AvatarWrapper, AvatarText } from "./styles";

interface IAvatarProps {
  children: string;
  onPress?: VoidFunction;
  touchableProps?: TouchableOpacityProps;
}

export const Avatar: React.FC<IAvatarProps> = ({
  children,
  touchableProps = {},
  onPress = () => {},
}) => {
  return (
    <AvatarWrapper {...Object.assign(touchableProps, onPress)}>
      <AvatarText>{children}</AvatarText>
    </AvatarWrapper>
  );
};
