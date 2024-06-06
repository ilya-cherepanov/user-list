import { Component } from '@angular/core';
import { UserCardComponent } from '../../componens/user-card/user-card.component';
import { UserListComponent } from '../../componens/user-list/user-list.component';
import { ResourceListComponent } from '../../componens/resource-list/resource-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserListComponent, ResourceListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
