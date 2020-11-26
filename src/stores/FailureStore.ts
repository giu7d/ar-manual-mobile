import { CameraCapturedPicture } from "expo-camera";
import { makeAutoObservable } from "mobx";
import { Failure } from "../models/Failure";

export const FailureStore = () =>
  makeAutoObservable({
    failure: new Failure({
      id: "",
      caoItemId: "",
      description: "",
      photos: [],
      createdAt: new Date(),
    }),
    addFailure(caoItemId: string, description: string) {
      this.failure.caoItemId = caoItemId;
      this.failure.description = description;
      this.failure.createdAt = new Date();
    },
    addPhoto(photo: CameraCapturedPicture) {
      this.failure.photos.push(photo);
    },
    removePhoto(index: number) {
      this.failure.photos.splice(index, 1);
    },
    clear() {
      this.failure = new Failure({
        id: "",
        caoItemId: "",
        description: "",
        photos: [],
        createdAt: new Date(),
      });
    },
  });
