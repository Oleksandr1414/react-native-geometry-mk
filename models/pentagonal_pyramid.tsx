import Shape3D from "./base/shape_3d";

export default class PentagonalPyramid implements Shape3D {
  private a: number;
  private h: number; //висота
  private H: number; //апофема

  constructor(a: number, h: number, H: number) {
    this.a = a;
    this.h = h;
    this.H = H;
  }

  private getBaseArea(): number {
    return parseFloat(
      (
        ((Math.sqrt(this.H * this.H - this.h * this.h) * this.a) / 2) *
        5
      ).toFixed(3)
    );
  }

  public getVolume(): number {
    return parseFloat(((1 / 3) * this.getBaseArea() * this.H).toFixed());
  }

  public getLateralArea(): number {
    return (1 / 2) * this.a * 5 * this.h;
  }

  public getTotalArea(): number {
    return parseFloat((this.getBaseArea() + this.getLateralArea()).toFixed(3));
  }
}
