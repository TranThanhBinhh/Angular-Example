import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AsideComponent } from './components/aside/aside.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule],
      declarations: [DashboardComponent, AsideComponent]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
