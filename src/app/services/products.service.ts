import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../components/shared/model/product";
import {Observable} from "rxjs";
import {productsUrl} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = []

  constructor(private httpClient: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productsUrl);
  }
}
