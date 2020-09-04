export class User {
  initial!: string;
  name!: string;
  email!: string;
  token!: string;

  constructor(props: User) {
    Object.assign(this, props);
  }
}
