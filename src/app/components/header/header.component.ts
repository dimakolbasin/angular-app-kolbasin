import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output()
  public onOpenCart: EventEmitter<void> = new EventEmitter<void>();


  @Input()
  public cartCounter: number = 0;

  ngOnInit(): void {
  }

  public openCart(): void {
    this.onOpenCart.emit();
  }
}
