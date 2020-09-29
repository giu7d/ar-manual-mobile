import { CameraCapturedPicture } from "expo-camera";
import { action, observable } from "mobx";

interface Failure {
  type: string;
  description: string;
  photos: CameraCapturedPicture[];
}

export class FailureStore {
  @observable
  failure: Failure = {
    type: "",
    description: "",
    photos: [],
  };

  constructor() {}

  @action
  saveForm = (type: string, description: string) => {
    this.failure.type = type;
    this.failure.description = description;
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
      type: "",
      description: "",
      photos: [],
    };
  };
}
