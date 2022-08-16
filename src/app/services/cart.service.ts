import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cart} from "../components/shared/model/cart";
import {cartUrl} from "../config/api";
import {Product} from "../components/shared/model/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartUrl).pipe(
      map((res: any[]) => {
        let cartItems: Cart[] = [];

        for (let item of res) {
          cartItems.push(new Cart(item.id, item.brand, item.price, item.product))
      }
        return cartItems
      })

    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, {product});
  }
}
