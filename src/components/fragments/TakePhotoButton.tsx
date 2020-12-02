import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components";
import { Button } from "./Button";

interface IProps {
  children: string;
}

export const TakePhotoButton: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleCamera = () => {
    navigation.navigate("FailureCamera");
  };

  return (
    <Button
      onPress={handleCamera}
      touchableProps={{
        style: {
          backgroundColor: theme.colors.foreground,
          minHeight: 64,
        },
      }}
      textProps={{
        style: {
          color: theme.colors.primary,
        },
      }}
    >
      {props.children}
    </Button>
  );
};
