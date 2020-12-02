import React, { useState } from "react";
import { Camera } from "expo-camera";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

import { CameraTemplate } from "../components/templates/CameraTemplate";
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
    <CameraTemplate
      cameraProps={{
        barCodeScannerSettings: {
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        },
        style: { flex: 1 },
        onBarCodeScanned,
        autoFocus: true,
        type: Camera.Constants.Type.back,
      }}
    >
      <CameraTargetMask />
    </CameraTemplate>
  );
};
