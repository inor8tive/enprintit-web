import { Injectable } from '@angular/core';
import {ITokenResponse} from "../../models/token-response.model";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  persist(token: ITokenResponse): void {
    console.log(token)
  }
}
