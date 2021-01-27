import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';
import {Subject} from 'rxjs';


@Injectable()
export class CartService {

  private _listProductsInCart: Map<number, Product> = new Map<number, Product>();

  private _cartCount: number = 0;

  public cartCount$: Subject<number> = new Subject<number>();

  constructor() {
  }

  public setCartCount(cartCount: number): void {
    this._cartCount = cartCount;
  }

  public getCartCount(): number {
    return this._cartCount;
  }


  get listProductsInCart(): Map<number, Product> {
    return this._listProductsInCart;
  }

  set listProductsInCart(value: Map<number, Product>) {
    this._listProductsInCart.clear();
    value.forEach((item) => {
      this._listProductsInCart.set(item.id, item);
    });
  }

}
