import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber/native";
import { ColladaMesh } from "./ColladaMesh";

export const ThreeCanvas: React.FC = () => {
  return (
    <Canvas
      gl={{
        antialias: true,
        logarithmicDepthBuffer: true,
      }}
      camera={{ position: [0, 6, 7], near: 5, far: 15 }}
      shadowMap
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <ColladaMesh />
      </Suspense>
    </Canvas>
  );
};
