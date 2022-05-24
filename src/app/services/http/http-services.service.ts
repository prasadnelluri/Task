import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor( private _http:HttpClient, private _session:SessionService) { }

  
  baseUrl:string='https://dev.greenkoncepts.com/';
  headers:any = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization'
  };




  UserLogin(data:any):Observable<any>{

    const httpOptions = {
      params : new HttpParams().set('username', data.username).set('password', data.password),
      headers: this.headers
    };

    return this._http.get(this.baseUrl+'gktest/login?',httpOptions);
    
  }

  GetAllProducts():Observable<any>{

    const httpOptions = {
      params : new HttpParams().set('token', this._session.getTokenDetails()),
      headers: this.headers
    };

    return this._http.get(this.baseUrl+'gktest/getAllOrders?', httpOptions);
    
  }
  
}
