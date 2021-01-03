import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Camera as ExpoCamera } from "expo-camera";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { Camera } from "../components/containers/Camera";
import { observer } from "mobx-react";
import { CameraButton } from "../components/fragments/CameraButton";
import { CameraSwitchSideButton } from "../components/fragments/CameraSwitchSideButton";
import { usePhotos } from "../hooks/usePhotos";

export const FailureCamera: React.FC = observer(() => {
  const cameraRef = useRef<ExpoCamera>(null);
  const [cameraSide, setCameraSide] = useState(ExpoCamera.Constants.Type.back);
  const navigation = useNavigation();
  const theme = useTheme();
  const { addPhoto } = usePhotos();

  const handlePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      addPhoto(photo);
      navigation.goBack();
    }
  };

  const toggleCamera = () => {
    setCameraSide((state: any) =>
      state === ExpoCamera.Constants.Type.back
        ? ExpoCamera.Constants.Type.front
        : ExpoCamera.Constants.Type.back
    );
  };

  return (
    <Camera
      cameraRef={cameraRef}
      cameraProps={{
        autoFocus: true,
        style: { flex: 1 },
        type: cameraSide,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "row",
        }}
      >
        <CameraSwitchSideButton onPress={toggleCamera}>
          <Icon name="rotate-cw" color={theme.colors.foreground} size={24} />
        </CameraSwitchSideButton>
        <CameraButton onPress={handlePhoto}>
          <Icon name="camera" color="#FFF" size={24} />
        </CameraButton>
      </View>
    </Camera>
  );
});
