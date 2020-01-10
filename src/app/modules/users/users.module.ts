import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UsersComponent, AdminUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
