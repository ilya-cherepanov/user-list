import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './componens/user-list/user-list.component';
import { ResourceListComponent } from './componens/resource-list/resource-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, ResourceListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-list';
}
