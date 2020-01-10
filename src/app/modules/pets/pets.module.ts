import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PetsComponent } from './components/pets.component';
import { PetsRoutingModule } from './pets-routing.module';



@NgModule({
  declarations: [PetsComponent],
  imports: [
    CommonModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
