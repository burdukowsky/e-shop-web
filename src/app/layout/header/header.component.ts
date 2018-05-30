import {Component, OnInit} from '@angular/core';
import {CartService} from '../../cart/cart.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public total = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.products$.subscribe(products => this.total = _.sumBy(products, 'cost'));
  }

}
