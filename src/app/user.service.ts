import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RawUser, RawUserDataPage, UpdatedUser, User, UserDataPage } from './types';
import { API_URL } from './constants';
import { Observable, map } from 'rxjs';
import { mapFromRawUserDataPage, mapRawUserToUser } from './utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static BASE_URL = '/users';
  private static HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  public getUsers(page?: number): Observable<UserDataPage> {
    const url = `${API_URL}${UserService.BASE_URL}?page=${page ?? 1}`;

    return this.http.get<RawUserDataPage>(url)
      .pipe(
        map((dataPage): UserDataPage => mapFromRawUserDataPage(dataPage)),
      );
  }

  public getUser(userId: number): Observable<User> {
    const url = `${API_URL}${UserService.BASE_URL}/${userId}`;

    return this.http.get<{ data: RawUser }>(url)
      .pipe(
        map((user): User => mapRawUserToUser(user.data)),
      );
  }

  public updateUser(userId: number, user: Partial<User>): Observable<UpdatedUser> {
    const url = `${API_URL}${UserService.BASE_URL}/${userId}`;

    return this.http.put<UpdatedUser>(url, user, UserService.HTTP_OPTIONS);
  }

  public deleteUser(userId: number): Observable<unknown> {
    const url = `${API_URL}${UserService.BASE_URL}/${userId}`;

    return this.http.delete(url, UserService.HTTP_OPTIONS);
  }
}
