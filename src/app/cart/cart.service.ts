import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Array<Product> = [];
  private productsSource = new Subject<Array<Product>>();
  public products$ = this.productsSource.asObservable();

  public addProduct(product: Product): void {
    this.products.push(product);
    this.productsSource.next(this.products);
  }

  public getProducts(): Array<Product> {
    return this.products;
  }
}
