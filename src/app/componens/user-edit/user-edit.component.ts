import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit {
  @Input({ required: true }) user!: User;
  @Output() onSubmit = new EventEmitter<User>();
  @Output() onCancel = new EventEmitter();

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get email() {
    return this.userForm.get('email');
  }

  ngOnInit(): void {
    this.userForm.setValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
    });
  }

  clickCancel(evt: MouseEvent) {
    evt.preventDefault();
    this.onCancel.emit();
  }

  submitForm() {
    if (this.userForm.valid) {
      this.onSubmit.emit({
        ...this.user,
        firstName: this.userForm.value.firstName ?? '',
        lastName: this.userForm.value.lastName ?? '',
        email: this.userForm.value.email ?? '',
      });
    }
  }
}
