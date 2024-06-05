import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../types';
import { NgIf } from '@angular/common';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgIf, UserInfoComponent, UserEditComponent, SpinnerComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  isEditing = false;
  user: User | null = null;

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const userId = parseInt(this.route.snapshot.paramMap.get("id") ?? "");

    this.userService.getUser(userId)
      .subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse && err.status === 404) {
            this.router.navigate(['not-found']);
          }
        },
      });
  }

  setEditing(state: boolean) {
    this.isEditing = state;
  }

  saveUser(user: User) {
    if (!this.user) {
      return;
    }

    const currentUser = this.user;
    this.userService.updateUser(currentUser.id, user)
      .subscribe((updatedUser) => {
        this.user = {
          ...currentUser,
          ...updatedUser,
        };

        this.isEditing = false;
      });
  }
}
