import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {products} from '../mocks/products.mock';
import {HttpClient} from '@angular/common/http';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';



@Injectable()
export class ProductDataService {

  constructor(private http: HttpClient) {
  }

  postProduct(body: any): Observable<any> {
    return this.http.post('/api/products', body);
  }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getCurrentProduct(id: number): Product[] {
    return [products[id]];
  }

}
