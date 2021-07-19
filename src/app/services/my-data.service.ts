import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseDataService } from './base-data.service';
import { environment } from 'src/environments/environment';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MyDataService extends BaseDataService{

  constructor(public httpClient: HttpClient, public router: Router) {
    super(httpClient,router);
  }

  public postRequest(name: string, request: any): Observable<any> {
    const method = environment.apiUri + 'api/bank/' +name;

    return this.post(method, request);
  }

  public getRequest(name: string): Observable<any> {
    const method = environment.apiUri + 'api/bank/' + name;

    return this.get(method);
  }

  public getById(name: string, id: number): Observable<any> {
    const method = environment.apiUri + 'api/bank/' + name + '/' + id;

    return this.get(method)
  } 
}
