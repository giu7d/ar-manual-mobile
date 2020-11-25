import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera, CameraProps } from "expo-camera";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Text } from "react-native";

import { Wrapper } from "./styles";

interface ICameraTemplateProps {
  cameraRef?: MutableRefObject<Camera | null>;
  cameraProps: CameraProps;
}

export const CameraTemplate: React.FC<ICameraTemplateProps> = (props) => {
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    if (!permission) {
      getPermission();
    }
  }, []);

  const getPermission = async () => {
    try {
      const cameraPermission = await Camera.requestPermissionsAsync();
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
      <Camera ref={props.cameraRef} {...props.cameraProps}>
        {props.children}
      </Camera>
    </Wrapper>
  );
};
