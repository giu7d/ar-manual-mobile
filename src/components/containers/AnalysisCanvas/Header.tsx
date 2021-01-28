import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { HeaderWrapper, CanvasIconButton } from "./styles";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import { useStores } from "../../../hooks/useStores";
import { Alert } from "react-native";

export const AnalysisCanvasHeader = observer(() => {
  const navigation = useNavigation();
  const { applicationStore, analysisStore } = useStores();

  const handleGoBack = () => {
    Alert.alert(
      "Be careful!",
      "All your progress will be lost! Do you really want to leave the analysis?",
      [
        {
          text: "OK",
          onPress: () => {
            analysisStore.clear();
            navigation.navigate("Home");
          },
        },
        {
          text: "Cancel",
          onPress: () => {},
        },
      ],
      { cancelable: true }
    );
  };

  const handleCanvasMode = () => {
    applicationStore.setCanvasMode(
      applicationStore.canvasMode === "photo" ? "3D" : "photo"
    );
  };

  return (
    <HeaderWrapper>
      <CanvasIconButton onPress={handleGoBack}>
        <Icon name="x" size={24} />
      </CanvasIconButton>
      <CanvasIconButton onPress={handleCanvasMode}>
        <Icon
          name={applicationStore.canvasMode === "photo" ? "box" : "image"}
          size={24}
        />
      </CanvasIconButton>
    </HeaderWrapper>
  );
});
