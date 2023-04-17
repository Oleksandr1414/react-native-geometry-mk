import Container from "../base/container";
import PentagonalPyramid from "../pentagonal_pyramid";

export default class ListPentagonalPyramids
  implements Container<PentagonalPyramid>
{
  private items: PentagonalPyramid[] = [];

  addItem(item: PentagonalPyramid): void {
    this.items.push(item);
  }

  removeItem(item: PentagonalPyramid): void {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  getItem(index: number): PentagonalPyramid {
    return this.items[index];
  }

  getSize(): number {
    return this.items.length;
  }
}
