import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit {
  @Input({ required: true }) user!: User;
  @Output() onSubmit = new EventEmitter<User>();
  @Output() onCancel = new EventEmitter();

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

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
    this.onSubmit.emit({
      ...this.user,
      firstName: this.userForm.value.firstName ?? '',
      lastName: this.userForm.value.lastName?? '',
      email: this.userForm.value.email ?? '',
    });
  }
}
