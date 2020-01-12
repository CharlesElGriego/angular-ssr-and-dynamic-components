import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerService } from './shared/services';
import { ResizeService } from './shared/services/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  //#region   Public Methods
  title = 'Angular SSR and Dynamic Components';
  //#endregion

  //#region   Private Properties
  private alive = true;
  private resizeSubscription: Subscription;
  //#endregion

  //#region   Constructor
  constructor(private serverService: ServerService, private resizeService: ResizeService) { }
  //#endregion

  //#region   Lifecycle Hooks
  ngOnInit(): void {
    this.resizeSubscription = this.resizeService.windowSize$
      .subscribe(size => console.log(size));
    this.serverService.getUsers().subscribe(users => this.serverService.users$.next(users));
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
  //#endregion

}
