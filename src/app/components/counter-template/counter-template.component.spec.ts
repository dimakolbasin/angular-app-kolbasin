import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTemplateComponent } from './counter-template.component';

describe('CounterTemplateComponent', () => {
  let component: CounterTemplateComponent;
  let fixture: ComponentFixture<CounterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
