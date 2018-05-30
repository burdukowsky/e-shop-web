import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Array<Product>;

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  addToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

}
