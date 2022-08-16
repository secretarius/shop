import {Product} from "./product";

export class Cart {
  id: string | number;
  price: number;
  brand: string;

  constructor(id: number, price: number, brand: string, product: Product) {
    this.id = id;
    this.price = product.price;
    this.brand = product.brand;
  }
}
