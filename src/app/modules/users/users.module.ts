import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UsersComponent, AdminUserComponent, AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
