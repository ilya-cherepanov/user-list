import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users/:id', component: UserComponent },
  { path: '**', component: NotFound404Component },
];
