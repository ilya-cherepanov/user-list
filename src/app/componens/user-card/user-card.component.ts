import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user?: User;
  @Output() onDelete = new EventEmitter<number>();

  constructor(
    private readonly router: Router,
  ) {}

  deleteUser(evt: MouseEvent) {
    evt.stopPropagation();
    evt.preventDefault();

    if (this.user) {
      this.onDelete.emit(this.user.id);
    }
  }

  onClick(evt: MouseEvent, userId: number) {
    evt.preventDefault();

    this.router.navigate(['/users', userId]);
  }
}
