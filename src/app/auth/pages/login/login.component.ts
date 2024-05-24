import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotifyService } from 'src/app/utils/services/notify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    showPassword: new FormControl(false)
  });

  constructor(private router: Router, private notify: NotifyService) { }

  login() {
    if(this.loginForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.loginForm.value))
      this.router.navigate(['/dashboard']);
    } else {
      this.notify.notify('Empty fields.', 'error')
    }
  }

  togglePasswordVisibility() {
    const passwordControl = this.loginForm.get('password');
    const showPasswordControl = this.loginForm.get('showPassword');
  
    if (passwordControl) { // Verifica que passwordControl no sea null
      if (showPasswordControl?.value) {
        passwordControl.setValidators([]);
      } else {
        passwordControl.setValidators([Validators.required]);
      }
      passwordControl.updateValueAndValidity();
    }
  }

}
