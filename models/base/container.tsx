export default interface Container<T> {
  addItem(item: T): void;
  removeItem(item: T): void;
  getItem(index: number): T;
  getSize(): number;
}
