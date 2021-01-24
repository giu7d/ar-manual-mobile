export class Account {
  id!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  initial!: string;
  token!: string;

  constructor(props: Omit<Account, "initial">) {
    Object.assign(this, props);
    this.initial = props.firstName[0];
  }
}
