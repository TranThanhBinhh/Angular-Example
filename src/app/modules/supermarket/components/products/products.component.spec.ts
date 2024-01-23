import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UtilsModule, ReactiveFormsModule],
      declarations: [ProductsComponent]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
