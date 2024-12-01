import { Component } from '@angular/core';
import { LoginService } from '../services/LoginService';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // In-memory "database" of users
  isAuthenticated = false;
  private users: { [key: string]: string } = {
    Andrey: 'admin123',
    User: 'user',
  };

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  submitForm(): void {
    if (this.loginForm.valid) {
      let formControls = this.loginForm.controls;

      console.log(this.loginForm.controls.email.value!);
      console.log(this.loginForm.controls.password.value!);
      console.log(this.users[this.loginForm.controls.email.value!]);

      if (
        this.users[this.loginForm.controls.email.value!] ===
        this.loginForm.controls.password.value
      ) {
        this.loginService.login(this.loginForm.controls.email.value!);
        this.router.navigate(['/home']);
      }
    }
  }
}
