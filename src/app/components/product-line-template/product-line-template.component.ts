import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-line-template',
  templateUrl: './product-line-template.component.html',
  styleUrls: ['./product-line-template.component.less']
})
export class ProductLineTemplateComponent implements OnInit {
  @Input()
  public product: Product = {} as Product;

  @Output()
  public onProductChange: EventEmitter<Product> = new EventEmitter<Product>();

  public totalPrice: number = 0;

  ngOnInit(): void {
    this.totalPrice = this.product.count * this.product.price;
  }

  changeCount(value: number): void {
    this.product.count = value;
    this.onProductChange.emit(this.product);
    this.totalPrice = this.product.count * this.product.price;
  }
}
