import { useNavigation } from "@react-navigation/native";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { AntDesign as Icon } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { IconButton } from "../../components/atoms/IconButton";
import { ITheme } from "../../theme";
import { useTheme } from "styled-components";

interface Props {}

export const TestBenchQRCodeCamera: React.FC<Props> = (props) => {
  const [camera, setCamera] = useState<Camera | null>();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState<boolean | undefined>(
    undefined
  );
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme() as ITheme;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data, ...rest }: BarCodeEvent) => {
    console.log(rest);

    if (!scanned) {
      try {
        if (!data) {
          throw new Error("Não foi possível extrair dados do QRCode!");
        }

        setScanned(true);

        const { testBenchId } = JSON.parse(data);

        if (!testBenchId) {
          throw new Error(
            "Não foi possível identificar qual testbench pertence o QRCode!"
          );
        }

        navigation.navigate("Analysis", { id: testBenchId });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  if (!hasPermission) {
    return <Text>No permission to access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Camera
        ref={(ref) => setCamera(ref)}
        autoFocus
        style={{ flex: 1 }}
        type={type}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        onBarCodeScanned={handleBarCodeScanned}
      >
        <>
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

          {scanned && (
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <IconButton
                onPress={() => setScanned(false)}
                style={{
                  backgroundColor: theme.colors.primary,
                  position: "absolute",
                  left: "47%",
                  bottom: 24,
                  height: 84,
                  width: 84,
                }}
              >
                <Icon name="qrcode" color="#FFF" size={34} />
              </IconButton>
            </View>
          )}
        </>
      </Camera>
    </View>
  );
};
