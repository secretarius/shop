export class Product {
  id: string | number;
  images: string[];
  title: string;
  rating: number;
  price: number;
  category: string;
  brand: string;

  constructor(id: number, images: string[], title: string, rating: number, price: number, category: string, brand: string) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;
  }
}
