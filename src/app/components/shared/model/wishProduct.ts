import {Product} from "./product";

export class WishProduct {
  id: string | number;
  images: string[];
  title: string;
  rating: number;
  price: number;
  brand: string;
  category: string;

  constructor(id: number, images: string, title: string, rating: number, price: number, category: string, brand: string, product: Product) {
    this.id = id;
    this.images = product.images;
    this.title = product.title;
    this.rating = product.rating;
    this.price = product.price;
    this.category = product.category;
    this.brand = product.brand;
  }
}
