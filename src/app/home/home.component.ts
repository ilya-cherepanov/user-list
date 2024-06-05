import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ResourceListComponent } from '../resource-list/resource-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserListComponent, ResourceListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
