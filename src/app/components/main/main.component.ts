import { Component } from '@angular/core';
import {products} from '../../mocks/products.mock';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent{
  public currentCurrency = '$';
  public generalCatalog: Product[] = [...products];
  public productsWithDiscount: string[] = ['IPHONE XR 512GB', 'IPHONE XR 256GB', 'IPHONE XR 128GB'];
  public catalog: any;
  public product: any;
  public productFromCart: any;
  public listProductsInCart: Map<number, {}> = new Map<number, {}>();

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
  };

  public transformPriceByDiscount(product: any): Product[] {
    return {
      ...product,
      price: (this.newDiscount(0.5)(product.price)) // add discount 50%
    };
  }

  public addToCart(index: number): void {

    this.catalog = this.getCatalogWithDiscount(this.generalCatalog, this.productsWithDiscount);

    if (this.listProductsInCart.has(index)) {
      this.productFromCart = this.listProductsInCart.get(index);
      ++this.productFromCart.count;
      this.productFromCart.totalPrice = this.productFromCart.count * this.productFromCart.price;
      this.listProductsInCart.set(index, this.productFromCart);
      console.log(this.listProductsInCart);

    } else {
      this.product = this.catalog[index];
      ++this.product.count;
      this.product.totalPrice = this.product.count * this.product.price;
      this.listProductsInCart.set(index, this.product);
      console.log(this.listProductsInCart);
    }
  }

  public getProducts(): any[] {
    return products;
  }
}
