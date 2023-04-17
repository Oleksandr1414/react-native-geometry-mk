export default interface Shape3D {
  // об'єм, бічна, повна
  getVolume(): number;
  getLateralArea(): number;
  getTotalArea(): number;
}
