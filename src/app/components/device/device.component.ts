import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductDataService} from '../../services/product-data.service';
import {Product} from '../../model/product.model';



@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.less']
})
export class DeviceComponent implements OnInit {

  public productList: Product[] = [];

  constructor(private productService: ProductDataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        const id = params?.id || '';
        this.productList = [...this.productService.getCurrentProduct(id)];
      });
  }

}
