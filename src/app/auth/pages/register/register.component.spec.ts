import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/utils/services/notify.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let notifyServiceSpy: jasmine.SpyObj<NotifyService>;

  beforeEach(() => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const notifyServiceSpyObj = jasmine.createSpyObj('NotifyService', ['notify']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RegisterComponent],
      providers: [
        { provide: Router, useValue: routerSpyObj },
        { provide: NotifyService, useValue: notifyServiceSpyObj },
      ],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    notifyServiceSpy = TestBed.inject(NotifyService) as jasmine.SpyObj<NotifyService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard when registerForm is valid', () => {
    // Mock valid form data
    const validFormData = { email: 'test@example.com', password: 'Password123', confirmPassword: 'Password123' };
    component.registerForm.setValue(validFormData);
    // Trigger register method
    component.register();
    // Expectations
    expect(localStorage.getItem('user')).toEqual(JSON.stringify(validFormData));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(notifyServiceSpy.notify).not.toHaveBeenCalled();
  });

  it('should show error notification when passwords do not match', () => {
    // Mock form data with mismatched passwords
    const mismatchedPasswords = { email: 'test@example.com', password: 'Password123', confirmPassword: 'DifferentPassword' };
    component.registerForm.setValue(mismatchedPasswords);
    // Reset localStorage before running the test
    localStorage.removeItem('user');
    // Trigger register method
    component.register();  
    // Expectations
    expect(localStorage.getItem('user')).toBeNull();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
    expect(notifyServiceSpy.notify).toHaveBeenCalledWith('Passwords do not match.', 'error');
  });

});
