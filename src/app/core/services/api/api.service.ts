import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  get<T>(path: string, params?:HttpParams): Observable<T> {
    return this._http.get<T>(`${environment.apiUrl}/${path}`, {params:params, observe: "body"});
  }

  post<T, S>(path: string, data: S, options?:HttpParams): Observable<T> {
    return this._http.post<T>(`${environment.apiUrl}/${path}`, data);
  }

  put<T, S>(path: string, data: S, options?:HttpParams): Observable<T> {
    return this._http.put<T>(`${environment.apiUrl}/${path}`, data);
  }

  delete<T>(path: string, options?:HttpParams): Observable<T> {
    return this._http.delete<T>(`${environment.apiUrl}/${path}`);
  }
}
