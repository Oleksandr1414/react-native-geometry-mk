import Shape3D from "./base/shape_3d";

export default class RectanglePrism implements Shape3D {
  private a: number;
  private h: number;
  private b: number;

  constructor(a: number, b: number, h: number) {
    this.a = a;
    this.b = b;
    this.h = h;
  }

  public getVolume(): number {
    return this.a * this.b * this.h;
  }

  public getLateralArea(): number {
    return (this.a + this.b) * 2 * this.h;
  }

  public getTotalArea(): number {
    return this.getLateralArea() + 2 * (this.a * this.b);
  }
}
