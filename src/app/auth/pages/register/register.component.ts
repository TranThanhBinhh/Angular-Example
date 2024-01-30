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
    if(this.validateForm()) {
      localStorage.setItem('user', JSON.stringify(this.registerForm.value))
      this.router.navigate(['/dashboard']);
    } else {
      this.notify.notify('An error has occurred.', 'error')
      console.error('Error.');
    }
  }

  validateForm() {
    if((this.registerForm.value.email === '') || (this.registerForm.value.password === '') || (this.registerForm.value.confirmPassword === '')) {
      this.notify.notify('Empty fields.', 'error')
      console.error('Error: Empty fields.');
      return false;
    } else if(this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.notify.notify('Passwords do not match.', 'error')
      console.error('Error: invalid form.');
      return false;
    } else {
      return true;
    }
  }

}
