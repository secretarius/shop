import {Component, OnInit} from '@angular/core';
import {WishlistService} from "../../../services/wishlist.service";
import {WishProduct} from "../../shared/model/wishProduct";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishtListComponent implements OnInit {
  wishList: WishProduct[] = [];

  constructor(private wishListService: WishlistService) {
  }

  ngOnInit(): void {
    this.wishListService.getWishList().subscribe((items) => {
      this.wishList = items;
    })
  }
}
