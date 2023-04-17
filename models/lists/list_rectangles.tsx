import Container from "../base/container";
import Rectangle from "../rectangle";

export default class ListRectangle implements Container<Rectangle> {
  private items: Rectangle[] = [];

  addItem(item: Rectangle): void {
    this.items.push(item);
  }

  removeItem(item: Rectangle): void {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  getItem(index: number): Rectangle {
    return this.items[index];
  }

  getSize(): number {
    return this.items.length;
  }
}
