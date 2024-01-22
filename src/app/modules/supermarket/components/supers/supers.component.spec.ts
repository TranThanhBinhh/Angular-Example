import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersComponent } from './supers.component';

describe('SupersComponent', () => {
  let component: SupersComponent;
  let fixture: ComponentFixture<SupersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
