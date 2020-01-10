import { ComponentFactory, ComponentRef, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { SafeurlPipe } from '../shared/pipes';
import { ContentService } from '../shared/services';
import { DynamicComponentService } from './services';

export class BuildDynamicComponent {

  //#region   Public Properties
  dynamicComponent: ComponentRef<any>;
  //#endregion

  //#region   Protected Properties
  @ViewChild('container', { read: ViewContainerRef, static: true }) protected container: ViewContainerRef;
  protected component: any;
  protected dynamicComponentService: DynamicComponentService;
  protected contenttService: ContentService;
  protected safeUrl: SafeurlPipe;
  protected template: string;

  //#endregion

  //#region   Constructor
  constructor(
    protected injector: Injector
  ) {
    this.dynamicComponentService = injector.get(DynamicComponentService);
    this.safeUrl = injector.get(SafeurlPipe);
  }
  //#endregion

  //#region   Protected Methods
  protected async generateUserDynamicComponent() {
    const componentFactory: ComponentFactory<any> = await this.dynamicComponentService.generateDynamic(this.component);
    //  Create the component and add to the view.
    const componentRef = this.container.createComponent(componentFactory);
    this.dynamicComponent = componentRef;
  }
  //#endregion
}
