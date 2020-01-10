import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DynamicComponentService } from './services';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
  ],
  providers: [DynamicComponentService],
  exports: [HeaderComponent]
})
export class CoreModule { }
