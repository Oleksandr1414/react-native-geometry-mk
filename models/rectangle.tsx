import Shape2D from "./base/shape_2d";

export default class Rectangle implements Shape2D {
  private a: number;
  private b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public toFloat3(value: any): number {
    return parseFloat(value.toFixed(3));
  }

  public getPerimeter(): number {
    return 2 * (this.a + this.b);
  }

  public getArea(): number {
    return this.a * this.b;
  }

  public getInscribedRadius(): number {
    return this.toFloat3(this.a === this.b ? this.a / 2 : 0);
  }

  public getCircumscribedRadius(): number {
    return this.toFloat3(Math.sqrt(this.a * this.a + this.b * this.b) / 2);
  }
}
