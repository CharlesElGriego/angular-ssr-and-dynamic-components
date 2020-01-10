import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  //#region   Public Properties
  users$: BehaviorSubject<User[]> = new BehaviorSubject([]);
  //#endregion
  //#region   Private Properties
  private url = 'http://localhost:3000/';
  //#region

  //#region   Constructor
  constructor(private http: HttpClient) {
  }
  //#endregion

  //#region   Public Methods
  getUser(): Observable<User> {
    return this.http.get<User>(this.url + 'user');
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'users');
  }
  //#endregion
}
