import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Camera } from "expo-camera";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { CameraTemplate } from "../components/templates/CameraTemplate";
import { useStores } from "../hooks/useStores";
import { observer } from "mobx-react";
import { CameraButton } from "../components/fragments/CameraButton";
import { CameraSwitchSideButton } from "../components/fragments/CameraSwitchSideButton";

export const FailureCamera: React.FC = observer(() => {
  const cameraRef = useRef<Camera>(null);
  const [cameraSide, setCameraSide] = useState(Camera.Constants.Type.back);
  const { failureStore } = useStores();
  const navigation = useNavigation();
  const theme = useTheme();

  const handlePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      failureStore.addPhoto(photo);
      navigation.goBack();
    }
  };

  const toggleCamera = () => {
    setCameraSide((state: any) =>
      state === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <CameraTemplate
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
    </CameraTemplate>
  );
});
