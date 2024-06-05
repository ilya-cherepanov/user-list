import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './constants';
import { Observable, map } from 'rxjs';
import { RawResourceDataPage, ResourceDataPage } from './types';
import { mapFromRawResourceDataPage } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private static BASE_URL = '/unknown';

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getResources(page?: number): Observable<ResourceDataPage> {
    const url = `${API_URL}${ResourceService.BASE_URL}?page=${page ?? 1}`;

    return this.http.get<RawResourceDataPage>(url)
      .pipe(
        map((resource): ResourceDataPage => mapFromRawResourceDataPage(resource)),
      );
  }
}
