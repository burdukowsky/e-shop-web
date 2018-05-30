export class CartItem {
  name: string;
  count: number;
  sum: number;

  constructor(name: string, count: number, sum: number) {
    this.name = name;
    this.count = count;
    this.sum = sum;
  }
}
