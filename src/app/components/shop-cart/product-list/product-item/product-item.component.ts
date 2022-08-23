import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shared/model/product";
import {MessendgerService} from "../../../../services/messendger.service";
import {faCartShopping, faHeart, faStar} from '@fortawesome/free-solid-svg-icons';
import {CartService} from "../../../../services/cart.service";
import {WishlistService} from "../../../../services/wishlist.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: Product;
  //@Input() productToWishlist!: Product;
  faHeart = faHeart;
  faCart = faCartShopping;
  faStar = faStar;
  addedToWishList: boolean = false;

  constructor(private msg: MessendgerService, private cartService: CartService, private wishListService: WishlistService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist() {
    this.wishListService.addProductToWishlist(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }
  //
  // handleRemoveToWishlist() {
  //   this.wishListService.removeFromWishList(this.productItem.id).subscribe(() => {
  //     this.msg.sendMsg(this.productItem)
  //   })
  // }

}
