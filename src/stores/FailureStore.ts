import { CameraCapturedPicture } from "expo-camera";
import { action, observable } from "mobx";
import { CAOItem } from "../models/CAOItem";

interface Failure {
  type?: string;
  createdAt?: Date;
  description: string;
  photos: CameraCapturedPicture[];
}

export class FailureStore {
  @observable
  failure: Failure = {
    type: undefined,
    createdAt: undefined,
    description: "",
    photos: [],
  };

  constructor() {}

  @action
  save = (type: string, description: string) => {
    this.failure.type = type;
    this.failure.description = description;
    this.failure.createdAt = new Date();
  };

  @action
  addPhoto = (photo: CameraCapturedPicture) => {
    this.failure.photos.push(photo);
  };

  @action
  removePhoto = (index: number) => {
    this.failure.photos.splice(index, 1);
  };

  @action
  clear = () => {
    this.failure = {
      type: undefined,
      createdAt: undefined,
      description: "",
      photos: [],
    };
  };
}
