import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './componens/user-list/user-list.component';
import { ResourceListComponent } from './componens/resource-list/resource-list.component';
import { UserAccountService } from './services/user-account.service';
import { HeaderComponent } from './componens/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, ResourceListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'user-list';

  constructor(
    private readonly userAccountService: UserAccountService,
  ) {}

  ngOnInit(): void {
    this.userAccountService.check();
  }
}
