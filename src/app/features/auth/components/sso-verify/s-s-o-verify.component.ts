import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SSOService} from "../../services/sso/s-s-o.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ITokenResponse} from "../../models/token-response.model";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-sso-verify',
  templateUrl: './s-s-o-verify.component.html'
})
export class SSOVerifyComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _sso: SSOService,
    private _router: Router,
    private _token: TokenService
  ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const {provider, ...otherParams} = params; //is it safe to parse all the other params to backend?

      if (provider) {
        this._sso.verify(provider, otherParams)
          .subscribe((token: ITokenResponse) => {
            this._token.persist(token);
            this.goToDashboard();
          }, (error: HttpErrorResponse) => {
            console.log(error);
            this.goToDashboard();
          });
      } else {
        this.goToDashboard();
      }
    })
  }

  goToDashboard():void {
    this._router.navigate(['..']);
  }

}
