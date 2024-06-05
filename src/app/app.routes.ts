import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users/:id', component: UserComponent },
  { path: '**', component: NotFound404Component },
];
