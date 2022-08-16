import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {wishlistUrl} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  addToWishList(productId: any) {
    return this.http.post(wishlistUrl, {id: productId})
  }

  removeFromWishList(productId: any) {
    return this.http.delete(wishlistUrl + '/' + productId)
  }
}
