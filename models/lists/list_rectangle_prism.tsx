import Container from "../base/container";
import RectanglePrism from "../rectangle_prism";

export default class ListRectanglePrism implements Container<RectanglePrism> {
  private items: RectanglePrism[] = [];

  addItem(item: RectanglePrism): void {
    this.items.push(item);
  }

  removeItem(item: RectanglePrism): void {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  getItem(index: number): RectanglePrism {
    return this.items[index];
  }

  getSize(): number {
    return this.items.length;
  }
}
