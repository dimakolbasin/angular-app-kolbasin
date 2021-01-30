import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductDataService} from '../../services/product-data.service';
import {Subscription} from 'rxjs';
import {Product} from '../../model/product.model';
import {products} from '../../mocks/products.mock';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  private subscription: Subscription = new Subscription();
  public dataForm: any;
  public formData: any;


  constructor(private productService: ProductDataService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      price: new FormControl('', [Validators.required, Validators.min(0), Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    this.subscription = this.productService.getProducts().subscribe((products: Product[]) => {
      this.dataForm = products;
    });

  }


  submit(): void {
    this.formData = {...this.form.value};
    this.formData.id = products.length;
    this.formData.count = 0;
    this.formData.url = "../../../assets/img/img-phone/xsBlack.png";

    this.subscription = this.productService.postProduct(this.formData).subscribe((product: Product[]) => {
        console.log('продукт добавлен');
      });
    this.router.navigate(['/products']).then(r => console.log(''));
  }

}
