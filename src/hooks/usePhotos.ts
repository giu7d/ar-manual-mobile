import { CameraCapturedPicture } from "expo-camera";
import { useStores } from "./useStores";

export const usePhotos = () => {
  const { analysisStore } = useStores();

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
    console.log("Uploaded!");
  };

  return {
    photos: analysisStore.photos,
    addPhoto,
    removePhoto,
    uploadPhotos,
    clearPhotos,
  };
};
