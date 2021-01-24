import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { HeaderWrapper, CanvasIconButton } from "./styles";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import { useStores } from "../../../hooks/useStores";

export const AnalysisCanvasHeader = observer(() => {
  const navigation = useNavigation();
  const { applicationStore, analysisStore } = useStores();

  const handleGoBack = () => {
    analysisStore.clear();
    navigation.navigate("Home");
  };

  const handleCanvasMode = () => {
    applicationStore.setCanvasMode(
      applicationStore.canvasMode === "photo" ? "3D" : "photo"
    );
  };

  return (
    <HeaderWrapper>
      <CanvasIconButton onPress={handleGoBack}>
        <Icon name="chevron-left" size={24} />
      </CanvasIconButton>
      <CanvasIconButton onPress={handleCanvasMode}>
        <Icon name="box" size={24} />
      </CanvasIconButton>
    </HeaderWrapper>
  );
});
