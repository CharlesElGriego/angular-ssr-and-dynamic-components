import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { UsersComponent } from './components/users/users.component';
const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'admin-user',
    component: AdminUserComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
