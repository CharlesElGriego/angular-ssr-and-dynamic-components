import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildDynamicComponent } from 'src/app/core/build-dynamic-component';
import { ContentService, ServerService } from 'src/app/shared/services';
import { AdminComponent } from './admin.component';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
})
export class AdminUserComponent extends BuildDynamicComponent implements OnInit, OnDestroy {

  //#region    Constructor
  constructor(
    protected injector: Injector,
    private contentService: ContentService,
    private serverService: ServerService,
    private router: Router
  ) {
    super(injector);
  }
  //#endregion


  //#region   Lifecycle hooks
  ngOnInit(): void {
    this.registeredEvents();
  }

  ngOnDestroy(): void {
    this.dynamicComponent.destroy();
  }
  //#endregion

  //#region   Public Methods
  destroyDynamicComponent(): void {
    this.dynamicComponent.destroy();
    this.dynamicComponent = null;
    this.router.navigate(['']);
  }
  //#endregion

  //#region   Protected Methods
  protected async generateUserDynamicComponent() {

    //  Define the component using Component decorator.
    this.component = Component({
      selector: 'app-dynamic-header',
      template: this.template,
      styles: ['button { color:red;}']
      // styleUrls: [('./header-dynamic.component.css')]
    })(AdminComponent);

    await super.generateUserDynamicComponent();
    this.dynamicComponent.instance.serverService = this.serverService;
  }
  //#endregion

  //#region   Private Methods
  private registeredEvents(): void {
    this.contentService.getContentAdmin().subscribe(async template => {
      if (template) {
        const safe: any = this.safeUrl.transform(template.content, 'html');
        this.template = safe.changingThisBreaksApplicationSecurity;
        await this.generateUserDynamicComponent();
      }
    });
  }
  //#endregion

}
