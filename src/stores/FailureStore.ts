import { CameraCapturedPicture } from "expo-camera";
import { makeAutoObservable } from "mobx";

export const FailureStore = () =>
  makeAutoObservable({
    photos: [] as CameraCapturedPicture[],
    addPhoto(photo: CameraCapturedPicture) {
      this.photos = [...this.photos, photo];
    },
    removePhoto(index: number) {
      const photos = [...this.photos];
      photos.splice(index, 1);
      this.photos = [...photos];
    },
    clear() {
      this.photos = [] as CameraCapturedPicture[];
    },
  });
