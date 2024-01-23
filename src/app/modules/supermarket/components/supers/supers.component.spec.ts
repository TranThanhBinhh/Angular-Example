import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersComponent } from './supers.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SupersComponent', () => {
  let component: SupersComponent;
  let fixture: ComponentFixture<SupersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UtilsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [SupersComponent]
    });
    fixture = TestBed.createComponent(SupersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
