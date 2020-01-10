import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { User } from 'src/app/shared/models';
import { ServerService } from 'src/app/shared/services';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  //#region   Public Properties
  users: User[] = [];
  //#endregion

  //#region   Private Properties
  private alive = true;
  //#endregion

  //#region   Constructor
  constructor(private serverService: ServerService) { }
  //#endregion

  //#region   Lifecycle Hooks
  ngOnInit(): void {
    this.serverService.users$.pipe(takeWhile(() => this.alive))
      .subscribe(users => this.users = users);
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
  //#endregion
}
