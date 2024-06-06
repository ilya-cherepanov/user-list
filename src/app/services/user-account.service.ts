import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AuthStatusType, Credentials, UserAccount } from '../types';
import { Observable, catchError, map, tap } from 'rxjs';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  public authStatus = signal<AuthStatusType>('unknown');

  private static LOGIN_BASE_URL = '/login';
  private static REGISTER_BASE_URL = '/register';
  private static HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  public check(): void {
    const user = localStorage.getItem('user');
    if (!user) {
      this.authStatus.set('unauthorized');
      return;
    }

    this.authStatus.set('authorized');
  }

  public login(credentials: Credentials): Observable<UserAccount> {
    const url = `${API_URL}${UserAccountService.LOGIN_BASE_URL}`;

    return this.httpClient.post<{ token: string }>(url, credentials, UserAccountService.HTTP_OPTIONS)
      .pipe(
        map((response) => ({ email: credentials.email, token: response.token })),
        tap((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.authStatus.set('authorized');
        }),
        // catchError(() => {
        //   this.authStatus.set('unauthorized');
        //   return ;
        // }),
      );
  }

  public logout(): void {
    this.authStatus.set('unauthorized');
    localStorage.removeItem('user');
  }
}
