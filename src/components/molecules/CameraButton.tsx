import React from "react";
import { useTheme } from "styled-components/native";
import { IconButton } from "../atoms/IconButton";

interface Props {
  onPress?: () => void;
}

export const CameraButton: React.FC<Props> = ({
  children,
  onPress = () => {},
}) => {
  const theme = useTheme();

  return (
    <IconButton
      onPress={onPress}
      style={{
        backgroundColor: theme.colors.primary,
        position: "absolute",
        left: "47%",
        bottom: 24,
        height: 84,
        width: 84,
      }}
    >
      {children}
    </IconButton>
  );
};
