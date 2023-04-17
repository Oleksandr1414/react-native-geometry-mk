import Container from "../base/container";
import Rhombs from "../rhomb";

export default class ListRhombs implements Container<Rhombs> {
  private items: Rhombs[] = [];

  addItem(item: Rhombs): void {
    this.items.push(item);
  }

  removeItem(item: Rhombs): void {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  getItem(index: number): Rhombs {
    return this.items[index];
  }

  getSize(): number {
    return this.items.length;
  }
}
