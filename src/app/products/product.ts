export class Product {
  id: number;
  name: string;
  description: string;
  cost: number;
  imageUrl: string;

  constructor(id: number, name: string, description: string, cost: number, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.imageUrl = imageUrl;
  }
}
