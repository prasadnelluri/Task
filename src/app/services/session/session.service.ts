import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private storage:any = window.localStorage;
  constructor() { }


  public isUserLoggerIn(): boolean {
    const uSessionDetails = this.getSessionDetails();
    if (uSessionDetails !== null) {
      return true;
    }
    return false;
  }

  public storeSessionDetails(data: Object) {
    this.storage.setItem('USER_SESSION_DETAILS', JSON.stringify(data));
  }
  
  public storeAuthToken(data: any) {
    console.log(data);
    this.storage.setItem('USER_TOKEN', data);
  }
  public getTokenDetails() {
    return (this.storage.getItem('USER_TOKEN'.toString())) || {};
  }

  public getUserName() {
    const { firstName = '', lastName = '' } = this.getSessionDetails();
    return `${firstName} ${lastName}`;
  }

  public getSessionDetails() {
    return JSON.parse(this.storage.getItem('USER_SESSION_DETAILS')) || null;
  }

  public logOut() {
    localStorage.clear();
    sessionStorage.clear();  
  }



}
