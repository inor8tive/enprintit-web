import { Component, OnInit } from '@angular/core';
import {SSOService} from "../../services/sso/s-s-o.service";
import {AuthProvider} from "../../../../core/enums/auth-provider";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  googleSSOEndpoint = '';
  facebookSSOEndpoint = '';

  constructor(
    private _ssoService: SSOService
  ) { }

  ngOnInit(): void {
    this.googleSSOEndpoint = this._ssoService.getCallback(AuthProvider.GOOGLE);
    this.facebookSSOEndpoint = this._ssoService.getCallback(AuthProvider.FACEBOOK);
  }

}
