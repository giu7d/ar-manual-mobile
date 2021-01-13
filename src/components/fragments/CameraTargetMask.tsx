import React from "react";
import { View } from "react-native";

export const CameraTargetMask = () => {
  return (
    <View
      style={{
        position: "absolute",
        height: 250,
        width: 250,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#00FF00",
        borderStyle: "dashed",
        top: "35%",
        left: "40%",
      }}
    />
  );
};
