export class CAOItem {
  public id!: string;
  public description!: string;
  public frequency!: string;
  public serie!: string;
  public reforce!: string;
  public method!: string;
  public conformity!: string;

  constructor(props: CAOItem) {
    Object.assign(this, props);
  }
}
