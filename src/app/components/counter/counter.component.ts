import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-template',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {

  @Input()
  public count: number = 0;

  @Output()
  public onCounterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  decrease(): void {
    --this.count;
    this.onCounterChange.emit(this.count);
  }

  increase(): void {
    ++this.count;
    this.onCounterChange.emit(this.count);
  }
}
