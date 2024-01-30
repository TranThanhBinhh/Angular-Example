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

  it('should handle collapse with default values', () => {
    // Initially, widthAside should be '250px' and widthBody should be 'calc(100vw - 250px)'
    expect(component.widthAside).toEqual('250px');
    expect(component.widthBody).toEqual('calc(100vw - 250px)');
    // Trigger handleCollapse with collapse = false
    component.handleCollapse(false);
    // After handling collapse, values should remain the same
    expect(component.widthAside).toEqual('250px');
    expect(component.widthBody).toEqual('calc(100vw - 250px)');
  });

  it('should handle collapse when collapse is true', () => {
    // Initially, widthAside should be '250px' and widthBody should be 'calc(100vw - 250px)'
    expect(component.widthAside).toEqual('250px');
    expect(component.widthBody).toEqual('calc(100vw - 250px)');
    // Trigger handleCollapse with collapse = true
    component.handleCollapse(true);
    // After handling collapse, values should be updated
    expect(component.widthAside).toEqual('75px');
    expect(component.widthBody).toEqual('calc(100vw - 75px)');
  });

});
