import { CameraCapturedPicture } from "expo-camera";
import { action, computed, observable } from "mobx";

interface Failure {
  caoId?: string;
  description: string;
  createdAt?: Date;
  photos: CameraCapturedPicture[];
}

export class FailureStore {
  @observable
  failure: Failure = {
    caoId: undefined,
    createdAt: undefined,
    description: "",
    photos: [],
  };

  constructor() {}

  @action
  addFailure = (caoId: string, description: string) => {
    this.failure.caoId = caoId;
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
      caoId: undefined,
      createdAt: undefined,
      description: "",
      photos: [],
    };
  };

  @computed
  get photosURI() {
    return this.failure.photos.map(({ uri }) => uri);
  }
}
