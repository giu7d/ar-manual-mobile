import { User } from "../models/User";

export interface AccountCoded {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

export function adaptUser(props: AccountCoded, token: string) {
  return new User({
    email: props.email,
    name: `${props.firstName} ${props.lastName}`,
    initial: props.firstName[0].toUpperCase(),
    token,
  });
}
