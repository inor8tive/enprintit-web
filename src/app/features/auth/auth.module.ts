import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { SSOVerifyComponent } from './components/sso-verify/s-s-o-verify.component';

@NgModule({
  declarations: [
    LoginComponent,
    SSOVerifyComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
