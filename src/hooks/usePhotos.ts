import { CameraCapturedPicture } from "expo-camera";
import { useState } from "react";
import { uploadFiles } from "../services/api";
import { useStores } from "./useStores";

export const usePhotos = () => {
  const { analysisStore } = useStores();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  const addPhoto = (photo: CameraCapturedPicture) => {
    const photos = [...analysisStore.photos, photo];
    analysisStore.setPhotos(photos);
  };

  const removePhoto = (index: number) => {
    const photos = [...analysisStore.photos];
    photos.splice(index, 1);
    analysisStore.setPhotos(photos);
  };

  const clearPhotos = () => analysisStore.setPhotos([]);

  const uploadPhotos = async () => {
    try {
      setIsLoading(true);

      const photosWithBase64 = analysisStore.photos
        .map(({ base64 }) => base64)
        .filter((string) => string !== undefined) as string[];

      const data = await uploadFiles("failures", photosWithBase64);
      const urls = data.map(({ url }) => url);

      return urls;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadPhoto = async (photo: CameraCapturedPicture) => {
    try {
      setIsLoading(true);
      const photoWithBase64 = photo.base64;

      if (!photoWithBase64) throw new Error("No photo was found");

      const data = await uploadFiles("failures", [photoWithBase64]);
      const urls = data.map(({ url }) => url);

      return urls;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    photos: analysisStore.photos,
    isLoading,
    isError,
    addPhoto,
    removePhoto,
    uploadPhotos,
    uploadPhoto,
    clearPhotos,
  };
};
