export class Failure {
  id!: string;
  photos!: string[];

  constructor(props: Failure) {
    Object.assign(this, props);
  }
}
