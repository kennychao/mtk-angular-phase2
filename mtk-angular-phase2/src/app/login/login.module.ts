import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    AuthComponent
  ]
})
export class LoginModule { }
