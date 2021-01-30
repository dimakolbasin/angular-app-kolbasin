import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

  }


  submit(): void {
    localStorage.setItem('loggedIn', 'true');

    this.router.navigate(['/products']).then(r => console.log(''));
    console.log('вход выполнен');

  }
}
