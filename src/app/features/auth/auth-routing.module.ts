import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SSOVerifyComponent} from "./components/sso-verify/s-s-o-verify.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sso',
    component: SSOVerifyComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
