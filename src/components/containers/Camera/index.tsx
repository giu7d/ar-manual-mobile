import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera as ExpoCamera, CameraProps } from "expo-camera";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Text } from "react-native";

import { Wrapper } from "./styles";

interface IProps {
  cameraRef?: MutableRefObject<ExpoCamera | null>;
  cameraProps: CameraProps;
}

export const Camera: React.FC<IProps> = (props) => {
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    if (!permission) {
      getPermission();
    }
  });

  const getPermission = async () => {
    try {
      const cameraPermission = await ExpoCamera.requestPermissionsAsync();
      const barCodePermission = await BarCodeScanner.requestPermissionsAsync();

      setPermission(
        cameraPermission.status === "granted" &&
          barCodePermission.status === "granted"
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!permission) {
    return (
      <Wrapper>
        <Text>No permission to access to camera!</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ExpoCamera ref={props.cameraRef} {...props.cameraProps}>
        {props.children}
      </ExpoCamera>
    </Wrapper>
  );
};
