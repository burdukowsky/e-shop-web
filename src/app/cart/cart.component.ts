import {Component, OnInit} from '@angular/core';
import {Product} from '../products/product';
import {CartService} from './cart.service';
import * as _ from 'lodash';
import {CartItem} from './cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private products: Array<Product>;
  public cart: Array<CartItem>;
  public total: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = _(this.products)
      .chain()
      .groupBy('id')
      .map(products => {
        return new CartItem(products[0].name, products.length, _.sumBy(products, 'cost'));
      })
      .value();
    this.total = _.sumBy(this.cart, 'sum');
  }

}
