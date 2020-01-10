import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafeurlPipe } from './safeurl.pipe';



@NgModule({
  declarations: [SafeurlPipe],
  imports: [
    CommonModule
  ],
  exports: [SafeurlPipe]
})
export class PipesModule { }
