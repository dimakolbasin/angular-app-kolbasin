import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.less']
})
export class ProductLineComponent implements OnInit {
  @Input()
  public product: Product = {} as Product;

  @Output()
  public onProductChange: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  public onProductDelete: EventEmitter<number> = new EventEmitter<number>();



  public totalPrice: number = 0;

  ngOnInit(): void {
    this.totalPrice = this.product.count * this.product.price;
  }

  changeCount(value: number): void {
    this.product.count = value;
    this.onProductChange.emit(this.product);
    this.totalPrice = this.product.count * this.product.price;
  }

  deleteProduct(id: number): void {
    this.onProductDelete.emit(id);
  }
}
