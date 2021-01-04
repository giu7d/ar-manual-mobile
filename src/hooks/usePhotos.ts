import { CameraCapturedPicture } from "expo-camera";
import { useState } from "react";
import { uploadFiles } from "../services/api";
import { useStores } from "./useStores";

export const usePhotos = () => {
  const { analysisStore } = useStores();

  const [isLoading, setIsLoading] = useState(false);

  const addPhoto = (photo: CameraCapturedPicture) => {
    const photos = [...analysisStore.photos, photo];

    analysisStore.setPhotos(photos);
  };

  const removePhoto = (index: number) => {
    const photos = [...analysisStore.photos];

    photos.splice(index, 1);
    analysisStore.setPhotos(photos);
  };

  const clearPhotos = () => {
    analysisStore.setPhotos([]);
  };

  const uploadPhotos = async () => {
    try {
      setIsLoading(true);

      const photosWithBase64 = analysisStore.photos
        .map(({ base64 }) => base64)
        .filter((string) => string !== undefined) as string[];

      const data = await uploadFiles("failures", photosWithBase64);
      const urls = data.map(({ url }) => url);

      console.log("uploadPhotos", "success");

      return urls;
    } catch (error) {
      console.log("uploadPhotos", "error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    photos: analysisStore.photos,
    isLoading,
    addPhoto,
    removePhoto,
    uploadPhotos,
    clearPhotos,
  };
};
