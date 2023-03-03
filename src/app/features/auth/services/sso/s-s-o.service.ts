import { Injectable } from '@angular/core';
import {AuthProvider} from "../../../../core/enums/auth-provider";
import {environment} from "../../../../../environments/environment";
import {ApiService} from "../../../../core/services/api/api.service";
import {Observable} from "rxjs";
import {ITokenResponse} from "../../models/token-response.model";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SSOService {

  constructor(
    private _api: ApiService
  ) { }

  getCallback(provider: AuthProvider): string {
    return `${environment.apiUrl}/auth/sso/${provider}/callback`
  }

  verify(provider: string, params: any): Observable<ITokenResponse> {
    const httpParams:HttpParams = new HttpParams({fromObject: params})
    return this._api.get<ITokenResponse>(`auth/sso/${provider}/callback`, httpParams);
  }
}
