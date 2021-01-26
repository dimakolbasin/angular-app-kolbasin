import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {products} from '../mocks/products.mock';


@Injectable()
export class MockDataService {

  constructor() {
  }

  getCurrentProduct(id: number): Product[] {
    return [products[id]];
  }

}
