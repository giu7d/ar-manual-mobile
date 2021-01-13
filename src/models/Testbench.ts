export class TestBench {
  id!: string;
  testBenchSerialNumber!: string;
  componentSerialNumber!: string;
  thumbnailSrc!: string;

  constructor(props: TestBench) {
    Object.assign(this, props);
  }
}
