export class Failure {
  id!: string;
  caoItemId!: string;
  description!: string;
  photos!: string[];
  createdAt!: Date;

  constructor(props: Failure) {
    Object.assign(this, props);
  }
}
