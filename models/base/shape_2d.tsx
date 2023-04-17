export default interface Shape2D {
  //периметр, площа, вписаний, описаний
  getPerimeter(): number;
  getArea(): number;
  getInscribedRadius(): number;
  getCircumscribedRadius(): number;

  toFloat3(value: any): number;
}
