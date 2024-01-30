import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotifyService } from 'src/app/utils/services/notify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\d).+$')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\d).+$')])
  });

  constructor(private router: Router, private notify: NotifyService) { }

  register() {
    const { isValid, message } = this.validateForm();
    if(isValid) {
      localStorage.setItem('user', JSON.stringify(this.registerForm.value))
      this.router.navigate(['/dashboard']);
    } else {
      this.notify.notify(message, 'error')
    }
  }

  validateForm() {
    if((this.registerForm.value.email === '') || (this.registerForm.value.password === '') || (this.registerForm.value.confirmPassword === '')) {
      return { isValid : false, message : 'Empty fields.' };
    } else if(this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      return { isValid : false, message : 'Passwords do not match.' };
    } else {
      return { isValid : true, message : ''};
    }
  }

}
