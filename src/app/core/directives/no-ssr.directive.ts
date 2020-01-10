import { isPlatformServer } from '@angular/common';
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNoSSR]'
})
export class NoSSRDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId
  ) { }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      // render on express render
      console.log('server side rendered');
      this.viewContainer.clear();
    } else {
      // this will work on the client
      console.log('client side rendered');
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
