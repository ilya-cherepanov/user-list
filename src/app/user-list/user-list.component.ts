import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserService } from '../user.service';
import { User, UserDataPage } from '../types';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, NgFor, NgIf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  loading = true;
  users: User[] = [];
  currentPage = 0;
  totalPages = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(page?: number) {
    this.loading = true;

    this.userService.getUsers(page)
      .subscribe((users) => {
        this.users.push(...users.data);
        this.currentPage = users.page;
        this.totalPages = users.totalPages;
        this.loading = false;
      });
  }

  onDelete(userId: number): void {
    this.userService.deleteUser(userId)
      .subscribe(() => {
        this.users = this.users.filter((user) => user.id !== userId);
      });
  }

  loadMore(evt: MouseEvent) {
    evt.preventDefault();

    if (this.currentPage >= this.totalPages) {
      return;
    }

    this.loadUsers(this.currentPage + 1);
  }

  // onPrevious(): void {
  //   if (!this.loading && this.users && this.users.page > 1) {
  //     this.loadUsers(this.users.page - 1);
  //   }
  // }

  // onNext(): void {
  //   if (!this.loading && this.users && this.users.page < this.users.totalPages) {
  //     this.loadUsers(this.users.page + 1);
  //   }
  // }
}
