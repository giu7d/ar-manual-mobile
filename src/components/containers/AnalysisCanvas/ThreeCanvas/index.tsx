import { Asset } from "expo-asset";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber/native";
import { ColladaMesh } from "./ColladaMesh";

export const ThreeCanvas: React.FC = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <ColladaMesh />
      </Suspense>
    </Canvas>
  );
};
