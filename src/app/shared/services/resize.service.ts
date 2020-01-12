import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  //#region   Public Properties
  window$: BehaviorSubject<Window> = new BehaviorSubject(window);
  //#endregion

  //#region   Constructor
  constructor(private eventManager: EventManager) {
    // this.window$.next(window);
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    this.onResize.bind(this);
  }
  //#endregion

  //#region   Private Methods
  private onResize(event: UIEvent) {
    this.window$.next(event.target as Window);
  }
}

