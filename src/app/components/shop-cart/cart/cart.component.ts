import {Component, OnInit} from '@angular/core';
import {MessendgerService} from "../../../services/messendger.service";
import {Product} from "../../shared/model/product";
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../shared/model/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  cartTotal = 0;

  constructor(private msg: MessendgerService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: any) => {
      this.loadCartItems()
    })
  }

  loadCartItems() {
    this.cartService.getCart().subscribe((items: Cart[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += ((item.price / 40))
    })
  }

}
