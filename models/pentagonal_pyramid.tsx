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

  public toFloat3(value: any): number {
    return parseFloat(value.toFixed(3));
  }

  private getBaseArea(): number {
    return this.h > this.H
      ? 0
      : this.toFloat3(
          ((Math.sqrt(this.H * this.H - this.h * this.h) * this.a) / 2) * 5
        );
  }

  public getVolume(): number {
    return this.toFloat3((1 / 3) * this.getBaseArea() * this.H);
  }

  public getLateralArea(): number {
    return (1 / 2) * this.a * 5 * this.h;
  }

  public getTotalArea(): number {
    return this.toFloat3(this.getBaseArea() + this.getLateralArea());
  }
}
