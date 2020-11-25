import { CameraCapturedPicture } from "expo-camera";
import { action, computed, observable } from "mobx";
import { API } from "../services/api";

interface Failure {
  caoId?: string;
  description: string;
  createdAt?: Date;
  photos: CameraCapturedPicture[];
  uploadedPhotosURLs: string[];
}

export class FailureStore {
  @observable
  failure: Failure = {
    caoId: undefined,
    createdAt: undefined,
    description: "",
    photos: [],
    uploadedPhotosURLs: [],
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
  uploadFiles = async () => {
    try {
      const files = this.failure.photos.map(({ base64 }) => base64);

      const {
        data,
      }: { data: { url: string }[] } = await API.post(
        "/upload/base64/failures",
        { files }
      );

      this.failure.uploadedPhotosURLs = data.map(({ url }) => url);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("UPLOAD END");
    }
  };

  @action
  clear = () => {
    this.failure = {
      caoId: undefined,
      createdAt: undefined,
      description: "",
      photos: [],
      uploadedPhotosURLs: [],
    };
  };
}
