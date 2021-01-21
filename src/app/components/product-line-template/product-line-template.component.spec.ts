import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLineTemplateComponent } from './product-line-template.component';

describe('ProductLineTemplateComponent', () => {
  let component: ProductLineTemplateComponent;
  let fixture: ComponentFixture<ProductLineTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLineTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
