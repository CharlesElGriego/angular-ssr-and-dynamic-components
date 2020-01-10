import { Component, OnInit } from '@angular/core';
import { ServerService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  //#region   Public Methods
  title = 'Angular SSR and Dynamic Components';
  //#endregion

  //#region   Private Properties
  private alive = true;
  //#endregion

  //#region   Constructor
  constructor(private serverService: ServerService) { }
  //#endregion

  //#region   Lifecycle Hooks
  ngOnInit(): void {
    this.serverService.getUsers().subscribe(users => this.serverService.users$.next(users));
  }
  //#endregion

}
