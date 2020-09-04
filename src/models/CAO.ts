import { CAOItem } from "./CAOItem";

export class CAO {
  public description!: string;
  public items!: CAOItem[];

  constructor(props: CAO) {
    Object.assign(this, props);
  }
}
