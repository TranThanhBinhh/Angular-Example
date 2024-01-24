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
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private notify: NotifyService) { }

  register() {
    if(this.registerForm.valid) {
      sessionStorage.setItem('user', JSON.stringify(this.registerForm.value))
      this.router.navigate(['/dashboard']);
    } else {
      this.notify.notify('Invalid form.', 'error')
      console.error('Error: invalid form.');
    }
  }

}
