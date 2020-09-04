export class Testbench {
  id!: string;
  thumbnailSrc!: string;
  testbenchSerialNumber!: string;
  componentSerialNumber!: string;

  constructor(props: Testbench) {
    Object.assign(this, props);
  }
}
