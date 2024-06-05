import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users/:id', component: UserComponent },
];
