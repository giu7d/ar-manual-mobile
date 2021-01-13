import React, { useState } from "react";
import { Camera as ExpoCamera } from "expo-camera";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

import { Camera } from "../components/containers/Camera";
import { CameraTargetMask } from "../components/fragments/CameraTargetMask";

export const QRCodeCamera: React.FC = () => {
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  const onBarCodeScanned = (props: BarCodeEvent) => {
    try {
      if (!scanned && props.data) {
        const { testBenchId } = JSON.parse(props.data);

        if (testBenchId) {
          navigation.navigate("Analysis", { id: testBenchId });
        }

        setScanned(true);
      }
    } catch (error) {
      console.log("Não foi possível extrair dados do QRCode!", error);
    }
  };

  return (
    <Camera
      cameraProps={{
        barCodeScannerSettings: {
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        },
        style: { flex: 1 },
        onBarCodeScanned,
        autoFocus: true,
        type: ExpoCamera.Constants.Type.back,
      }}
    >
      <CameraTargetMask />
    </Camera>
  );
};
