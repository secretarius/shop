import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shared/model/product";
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent implements OnInit {
  @Input() productItem!: Product;
  @Input() productToWishlist!: Product;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {  }
}
