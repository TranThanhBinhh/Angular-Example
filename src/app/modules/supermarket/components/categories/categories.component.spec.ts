import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UtilsModule, ReactiveFormsModule],
      declarations: [CategoriesComponent]
    });
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
