import Shape2D from "./base/shape_2d";

export default class Rhomb implements Shape2D {
  private a: number;
  private h: number;
  private d1: number;
  private d2: number;

  constructor(a: number, h: number, d1: number, d2: number) {
    this.a = a;
    this.h = h;
    this.d1 = d1;
    this.d2 = d2;
  }

  public getPerimeter(): number {
    return 4 * this.a;
  }

  public getArea(): number {
    return (this.d1 * this.d2) / 2;
  }

  public getInscribedRadius(): number {
    return parseFloat((this.h / 2).toFixed(3));
  }

  public getCircumscribedRadius(): number {
    return parseFloat((this.d1 === this.d2 ? 0 : this.d1 / 2).toFixed(3));
  }
}
