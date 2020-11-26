import { CameraCapturedPicture } from "expo-camera";

export class Failure {
  id!: string;
  caoItemId!: string;
  description!: string;
  photos!: CameraCapturedPicture[];
  createdAt!: Date;

  constructor(props: Failure) {
    Object.assign(this, props);
  }
}
