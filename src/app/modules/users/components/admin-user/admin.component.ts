import { OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models';
import { ServerService } from 'src/app/shared/services';


export class AdminComponent implements OnInit, OnDestroy {

  //#region   Public Properties
  serverService: ServerService;
  showText = false;
  user: User;
  //#endregion

  //#region   Constructor
  constructor(
  ) {
  }
  //#endregion

  //#region   Life Cycle Hooks
  ngOnInit() {

  }
  ngOnDestroy() {
    console.log('Dynamic Component OnDestroy');
  }
  //#endregion

  //#region   Public Methods
  clickMe() {
    this.serverService.getUser().subscribe(user => {
      if (user) {
        this.user = { ...user };
        this.showText = true;
      }
    });
  }
  //#endregion
}
