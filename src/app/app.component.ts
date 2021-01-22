import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public cartCounter: number = 0;
  showModal = false;
  public toggleCart(): void {
    this.showModal = !this.showModal;
  }

  public changeCartCounter(value: number): void {
    this.cartCounter = value;
  }

  public changeCounter(count: number): void {
    this.cartCounter = this.cartCounter - count;
  }
}
