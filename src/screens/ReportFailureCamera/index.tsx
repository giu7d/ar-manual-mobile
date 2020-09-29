import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import { IconButton } from "../../components/atoms/IconButton";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { ITheme } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react";

interface IReportFailureCameraProps {}

export const ReportFailureCamera: React.FC<IReportFailureCameraProps> = observer(
  (props) => {
    const [camera, setCamera] = useState<Camera | null>();
    const [hasPermission, setHasPermission] = useState<boolean>();
    const [type, setType] = useState(Camera.Constants.Type.back);
    const theme = useTheme() as ITheme;
    const navigation = useNavigation();
    const { failureStore } = useStores();

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);

    const handlePhoto = async () => {
      if (camera) {
        const photo = await camera.takePictureAsync();
        failureStore.addPhoto(photo);
        navigation.goBack();
      }
    };

    if (!hasPermission) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera
          ref={(ref) => setCamera(ref)}
          autoFocus
          style={{ flex: 1 }}
          type={type}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <IconButton
              style={{
                flex: 0.1,
                position: "absolute",
                left: 24,
                bottom: 24,
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Icon
                name="rotate-cw"
                color={theme.colors.foreground}
                size={24}
              />
            </IconButton>
            <IconButton
              onPress={handlePhoto}
              style={{
                backgroundColor: theme.colors.danger,
                position: "absolute",
                left: "47%",
                bottom: 24,
                height: 84,
                width: 84,
              }}
            >
              <Icon name="camera" color="#FFF" size={24} />
            </IconButton>
          </View>
        </Camera>
      </View>
    );
  }
);
