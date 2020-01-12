import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  //#region   Public Properties
  get windowSize$(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }
  //#endregion

  //#region   Private Properites
  private resizeSubject: Subject<Window>;
  //#endregion

  //#region   Constructor
  constructor(private eventManager: EventManager) {
    this.resizeSubject = new Subject();
    this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
  }
  //#endregion

  //#region   Private Methods
  private onResize(event: UIEvent) {
    this.resizeSubject.next(event.target as Window);
  }
  //#endregion
}

