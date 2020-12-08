import { Asset } from "expo-asset";
import React, { useEffect, useState } from "react";
import { THREE } from "expo-three";
import { useFrame } from "react-three-fiber/native";

import {
  Collada,
  ColladaLoader,
} from "three/examples/jsm/loaders/ColladaLoader";

export const ColladaMesh: React.FC = () => {
  const [mesh, setMesh] = useState<Collada>();
  const [mixer, setMixer] = useState<THREE.AnimationMixer>();
  const [clips, setClips] = useState<THREE.AnimationClip[]>();

  useEffect(() => {
    if (!mesh) {
      loadAsset();
    }
  });

  useEffect(() => {
    if (clips && mixer && mesh) {
      clips.forEach((clip) => mixer.clipAction(clip).setDuration(5).play());
    }
  }, [mesh, clips, mixer]);

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  const loadAsset = async () => {
    const initTime = new Date();

    const asset = Asset.fromModule(
      require("../../../../../assets/3d/Demo.dae")
    );

    await asset.downloadAsync();

    if (!asset.localUri) {
      console.log(404);
      return;
    }

    const loader = new ColladaLoader();
    const model = await loader.loadAsync(asset.uri);

    setMesh(model);
    setMixer(new THREE.AnimationMixer(model.scene));
    setClips(model.animations);

    const endTime = new Date();

    console.log(`
    =============
    Asset loaded!

    it takes ${endTime.getTime() - initTime.getTime()} ms to load.
    =============
    `);
  };

  return mesh ? (
    <primitive
      object={mesh.scene}
      children-0-material={
        new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
      }
      children-1-material={
        new THREE.MeshBasicMaterial({ wireframe: true, color: 0x0000ff })
      }
      children-2-material={
        new THREE.MeshBasicMaterial({ wireframe: true, color: 0x0000ff })
      }
      children-3-material={
        new THREE.MeshBasicMaterial({ wireframe: true, color: 0x00ff00 })
      }
      children-4-material={
        new THREE.MeshBasicMaterial({ wireframe: true, color: 0x0000ff })
      }
    />
  ) : (
    <></>
  );
};
