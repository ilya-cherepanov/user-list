import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  @Input({ required: true }) user!: User;
  @Output() onEdit = new EventEmitter();

  clickEdit(evt: MouseEvent) {
    evt.preventDefault();
    this.onEdit.emit();
  }
}
