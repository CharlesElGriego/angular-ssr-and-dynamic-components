import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { UsersComponent } from './components/users/users.component';
const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  }, {
    path: 'add-user',
    component: AddUserComponent
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
