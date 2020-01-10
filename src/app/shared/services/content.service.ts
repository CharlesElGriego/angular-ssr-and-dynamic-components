import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  //#region  Private Properties
  private url = 'http://localhost:3000/';
  //#endregion

  //#region  Constructor
  constructor(private http: HttpClient) {
  }
  //#endregion

  //#region  Public Methods
  getContentAdmin(): Observable<ContentResponse> {
    return this.http.get<ContentResponse>(this.url + 'content-admin');
  }
  getLayoutHeader(): Observable<ContentResponse> {
    return this.http.get<ContentResponse>(this.url + 'layout-header');
  }
  //#endregion


}
