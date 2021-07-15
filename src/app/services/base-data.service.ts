import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDataService {

  constructor(public httpClient: HttpClient, public router: Router) { }

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json') 
        .set('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0')
        .set('Pragma', 'no-cache')
        .set('Expires', '-1');
  }

  protected post(apiMethod, request): Observable<any> {
    const headers = this.getHeaders();

    return this.httpClient.post(apiMethod, request, { headers, responseType: 'json'})
      .pipe(
        map(res => res),
        take(1)
      )
  }

  protected get(apiMethod): Observable<any> {
    const headers = this.getHeaders();

    return this.httpClient.get(apiMethod, { headers, responseType: 'json' });
  }
}

