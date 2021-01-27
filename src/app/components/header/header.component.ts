import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../../services/cart-data.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output()
  public onOpenCart: EventEmitter<void> = new EventEmitter<void>();


  public cartCounter: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe((count: number) => {
      this.cartCounter = count;
    });
  }

  /*public getCounter(): number {
    this.cartCounter = this.cartService.getCartCount();
    return this.cartCounter;
  }*/

  public openCart(): void {
    this.onOpenCart.emit();
  }
}
