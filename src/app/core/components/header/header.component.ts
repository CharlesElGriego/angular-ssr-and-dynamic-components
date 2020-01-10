import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/services';
import { BuildDynamicComponent } from '../../build-dynamic-component';
import { HeaderDynamicComponent } from './header-dynamic.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends BuildDynamicComponent implements OnInit, OnDestroy {

  //#region    Constructor
  constructor(
    protected injector: Injector,
    private contentService: ContentService,
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

  //#region   Protected Methods
  protected async generateUserDynamicComponent() {

    //  Define the component using Component decorator.
    this.component = Component({
      selector: 'app-dynamic-header',
      template: this.template,
      styles: [` .layout-header {
        padding: 5px;
        text-align: center;
        background: #1abc9c;
        color: white;
        display: flex;
      }

      .layout-header button {
        flex: 33%;
      }
     `]
      // styleUrls: [('./header-dynamic.component.css')]
    })(HeaderDynamicComponent);

    await super.generateUserDynamicComponent();
    this.dynamicComponent.instance.router = this.router;
  }
  //#endregion

  //#region   Private Methods
  private registeredEvents(): void {
    this.contentService.getLayoutHeader().subscribe(async template => {
      if (template) {
        const safe: any = this.safeUrl.transform(template.content, 'html');
        this.template = safe.changingThisBreaksApplicationSecurity;
        await this.generateUserDynamicComponent();
      }
    });
  }
  //#endregion

}
