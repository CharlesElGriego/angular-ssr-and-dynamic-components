import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(module => module.UsersModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('./modules/pets/pets.module').then(module => module.PetsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
