import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';
import {CartService} from '../../services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  public _listProductsInCart: Map<number, Product> = new Map<number, Product>();

  public list: Product[] = [];

  @Output()
  public onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onRemoveProduct: EventEmitter<number> = new EventEmitter<number>();

  _trackBy(index: number): number {
    return index;
  }
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.listProductsInCart.forEach((item) => {
      this._listProductsInCart.set(item.id, item);
    });
  }

  changeProduct(product: Product): void {
    this._listProductsInCart.set(product.id, product);
    let count: number = 0;
    this._listProductsInCart.forEach(item => {
      count += item.count;
    });
    this.cartService.cartCount$.next(count);
  }

  closeCart(): void {
    this.onCloseCart.emit();
  }

  deleteProduct(id: number): void {
    this.onRemoveProduct.emit(this._listProductsInCart.get(id)?.count);
    this._listProductsInCart.delete(id);
    this.cartService.listProductsInCart = this._listProductsInCart;
  }

  dropCart(): void {
    let count: number = 0;
    this._listProductsInCart.forEach(item => {
      count += item.count;
    });
    this.onRemoveProduct.emit(count);
    this._listProductsInCart.clear();
    this.cartService.listProductsInCart = this._listProductsInCart;
  }
}
