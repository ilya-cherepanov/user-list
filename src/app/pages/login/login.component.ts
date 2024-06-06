import { Component } from '@angular/core';
import { UserAccountService } from '../../services/user-account.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  constructor(
    private readonly userAccountService: UserAccountService,
    private readonly router: Router,
  ) {}

  onSubmit() {
    this.userAccountService.login({
      email: this.registerForm.value.email ?? '',
      password: this.registerForm.value.password ?? '',
    }).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
