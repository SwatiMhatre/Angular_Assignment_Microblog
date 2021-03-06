import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      user_name: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  
  }

  onSubmit() {
    this.authService.login({
      user_name: this.loginForm.value.user_name,
      password: this.loginForm.value.password
    });
  }
}
