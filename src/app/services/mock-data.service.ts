import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {products} from '../mocks/products.mock';


@Injectable()
export class MockDataService {

  constructor() {
  }

  /*getCurrentCategory(): Product | undefined {
    return this.currentProduct;
  }*/

  setCurrentCategory(id: number): any[] {
    return [products[id]];
  }

}
