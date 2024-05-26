import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/utils/services/notify.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let notifyServiceSpy: jasmine.SpyObj<NotifyService>;

  beforeEach(() => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const notifyServiceSpyObj = jasmine.createSpyObj('NotifyService', ['notify']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: routerSpyObj },
        { provide: NotifyService, useValue: notifyServiceSpyObj },
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    notifyServiceSpy = TestBed.inject(NotifyService) as jasmine.SpyObj<NotifyService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard when loginForm is valid', () => {
    // Mock valid form data
    const validFormData = { email: 'test@example.com', password: 'password', showPassword: false };
    component.loginForm.setValue(validFormData);

    // Trigger login method
    component.login();

    // Expectations
    expect(localStorage.getItem('user')).toEqual(JSON.stringify(validFormData));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(notifyServiceSpy.notify).not.toHaveBeenCalled();
  });

  it('should show error notification when loginForm is invalid', () => {
    // Mock invalid form data
    const invalidFormData = { email: '', password: '', showPassword: false };
    component.loginForm.setValue(invalidFormData);
    // Reset localStorage before running the test
    localStorage.removeItem('user');
    // Trigger login method
    component.login();
    // Expectations
    expect(localStorage.getItem('user')).toBeNull();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
    expect(notifyServiceSpy.notify).toHaveBeenCalledWith('Empty fields.', 'error');
  });

  it('should toggle password visibility and update validators', () => {
    // Initial state
    expect(component.loginForm.get('password')?.validator).toEqual(Validators.required);
    // Toggling password visibility
    component.togglePasswordVisibility();
    // After toggling visibility
    expect(component.loginForm.get('password')?.validator).toBeNull();
    // Toggling visibility again
    component.togglePasswordVisibility();
    // After toggling visibility again
    expect(component.loginForm.get('password')?.validator).toEqual(Validators.required);
  });

});
