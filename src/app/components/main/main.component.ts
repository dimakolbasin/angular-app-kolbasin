import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';
import {CartService} from '../../services/cart-data.service';
import {ProductDataService} from '../../services/product-data.service';
import {Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, OnDestroy{
  public currentCurrency = '$';
  public generalCatalog: Product[] = [];
  public productsWithDiscount: string[] = ['IPHONE XR 512GB', 'IPHONE XR 256GB', 'IPHONE XR 128GB'];
  public catalog: any;
  public product: any;
  public productFromCart: any;
  private subscription: Subscription = new Subscription();

  @Output()
  public onCounterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private cartService: CartService,
              private productService: ProductDataService) {
  }

  ngOnInit(): void {
    this.subscription = this.productService.getProducts().subscribe((products: Product[]) => {
      this.generalCatalog = products;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getCatalogWithDiscount(generalCatalog: Product[], productsWithDiscount: string[]): any {
    return generalCatalog.map((product) => {
      if (productsWithDiscount.includes(product.name)){
        return this.transformPriceByDiscount(product);
      } else {
        return product;
      }
    });
  }

  public newDiscount(discount: number): any {
    return (price: number) => {
      return price - price * discount;
    };
  }

  public transformPriceByDiscount(product: any): Product[] {
    return {
      ...product,
      price: (this.newDiscount(0.5)(product.price)) // add discount 50%
    };
  }

  public addToCart(index: number): void {

    this.catalog = this.getCatalogWithDiscount(this.generalCatalog, this.productsWithDiscount);

    if (this.cartService.listProductsInCart.has(index)) {
      this.productFromCart = this.cartService.listProductsInCart.get(index);
      ++this.productFromCart.count;
      this.productFromCart.totalPrice = this.productFromCart.count * this.productFromCart.price;
      this.cartService.listProductsInCart.set(index, this.productFromCart);
    } else {
      this.product = this.catalog[index];
      ++this.product.count;
      this.product.totalPrice = this.product.count * this.product.price;
      this.cartService.listProductsInCart.set(index, this.product);
    }

    /*this.cartService.setCartCount(this.getCounter());*/
    this.cartService.cartCount$.next(this.getCounter());
  }

  public getCounter(): number {
    let counter: number = 0;
    this.cartService.listProductsInCart.forEach((value: Product) => counter += value.count);
    return counter;
  }

}
