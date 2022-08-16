import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductListComponent } from './components/shop-cart/product-list/product-list.component';
import { FiltersComponent } from './components/shop-cart/filters/filters.component';
import { CartComponent } from './components/shop-cart/cart/cart.component';
import { ProductItemComponent } from './components/shop-cart/product-list/product-item/product-item.component';
import {HttpClientModule} from "@angular/common/http";
import { CartItemComponent } from './components/shop-cart/cart/cart-item/cart-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SearchComponent } from './components/shared/search/search.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopCartComponent,
    NavComponent,
    ProductListComponent,
    FiltersComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
