import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotifyService } from 'src/app/utils/services/notify.service';
import { UserService } from 'src/app/modules/supermarket/services/user.service';


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

  constructor(private router: Router, private notify: NotifyService, private userSerive: UserService) { }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(email, password);
      this.userSerive.login(email||'', password||'').subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.notify.notify('Invalid credentials or login failed.', 'error');
        }
      );
    } else {
      this.notify.notify('Empty fields.', 'error');
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
