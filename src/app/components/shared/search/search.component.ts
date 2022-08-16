import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faCartShopping, faHeart, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faStar = faStar;
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
