import React, { useRef, useState } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
import { Camera as ExpoCamera } from "expo-camera";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { Camera } from "../components/containers/Camera";
import { observer } from "mobx-react";
import { CameraButton } from "../components/fragments/CameraButton";
import { CameraSwitchSideButton } from "../components/fragments/CameraSwitchSideButton";
import { usePhotos } from "../hooks/usePhotos";
import { useInstructions } from "../hooks/useInstructions";
import { useAnalysis } from "../hooks/useAnalysis";
import { Analysis } from "../models/Analysis";
import uuid from "react-native-uuid";

export const FailureCamera: React.FC = observer(() => {
  const route = useRoute() as {
    params: { id: string };
  };
  const cameraRef = useRef<ExpoCamera>(null);
  const [cameraSide, setCameraSide] = useState(ExpoCamera.Constants.Type.back);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();
  const { addPhoto, ...PhotoUtils } = usePhotos();
  const {
    selectedInstruction,
    selectedInstructionAt,
    ...InstructionUtils
  } = useInstructions(route.params.id);
  const { addAnalysis } = useAnalysis();

  const handlePhoto = async () => {
    if (cameraRef.current) {
      setIsTakingPhoto(true);
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      const failurePhotos = await PhotoUtils.uploadPhoto(photo);

      if (!failurePhotos) {
        return Alert.alert("Falha no envio da imagem!", "Tente novamente");
      }

      if (!selectedInstruction) {
        return Alert.alert(
          "Nenhuma instrução foi selecionada!",
          "Tente novamente"
        );
      }

      addAnalysis(
        new Analysis({
          id: uuid.v4(),
          instructionId: selectedInstruction.id,
          startedAt: selectedInstructionAt,
          finishedAt: new Date(),
          status: "failure",
          failure: {
            id: uuid.v4(),
            photos: failurePhotos,
          },
        })
      );

      InstructionUtils.goToInstruction(selectedInstruction.nextInstructionId);
      PhotoUtils.clearPhotos();
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
          backgroundColor: !isTakingPhoto ? "transparent" : "#F5F5F5",
          flexDirection: "row",
        }}
      >
        <CameraSwitchSideButton onPress={toggleCamera}>
          <Icon name="rotate-cw" color={theme.colors.foreground} size={24} />
        </CameraSwitchSideButton>
        {!isTakingPhoto ? (
          <CameraButton onPress={handlePhoto}>
            <Icon name="camera" color="#FFF" size={24} />
          </CameraButton>
        ) : (
          <CameraButton>
            <ActivityIndicator color="#FFF" size="large" />
          </CameraButton>
        )}
      </View>
    </Camera>
  );
});
