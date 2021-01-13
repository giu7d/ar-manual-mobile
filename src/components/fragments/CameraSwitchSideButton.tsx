import React from "react";

import { IconButton } from "./IconButton";

interface Props {
  onPress?: () => void;
}

export const CameraSwitchSideButton: React.FC<Props> = ({
  children,
  onPress = () => {},
}) => {
  return (
    <IconButton
      onPress={onPress}
      style={{
        flex: 0.1,
        position: "absolute",
        left: 24,
        bottom: 24,
      }}
    >
      {children}
    </IconButton>
  );
};
