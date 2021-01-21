import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';
import {CartService} from '../../services/cart-data.service';

@Component({
  selector: 'app-cart-template',
  templateUrl: './cart-template.component.html',
  styleUrls: ['./cart-template.component.less']
})
export class CartTemplateComponent implements OnInit {

  public _listProductsInCart: Map<number, Product> = new Map<number, Product>();

  public list: Product[] = [];

  @Output()
  public onCloseCart: EventEmitter<void> = new EventEmitter<void>();

  _trackBy(index: number): number {
    return index;
  }
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this._listProductsInCart = this.cartService.listProductsInCart;
    this.list = Array.from(this._listProductsInCart.values());
  }

  changeProduct(product: Product): void {
    this._listProductsInCart.set(product.id, product);
  }

  closeCart(): void {
    this.onCloseCart.emit();
  }
}
