import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http/http-services.service';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";

  prloaderRun:boolean = false;

  constructor(private _api:HttpServicesService,
              private alertService:AlertsService,
              private _session:SessionService,
              private router:Router) { 
      
  }   

  ngOnInit(): void {
      
  }

  onSubmit(loginForm:any){
    this.prloaderRun = true;

    let payload:any = {
      username:this.username,
      password:this.password
    }
    
    this._api.UserLogin(payload).subscribe((res:any)=>{

      if(res){
       // this._session.storeSessionDetails(res);
        this._session.storeSessionDetails(res);
        this._session.storeAuthToken(res.key);
        this.router.navigate(['dashboard']);
        this.alertService.success('Done !',' Scessfully Login.');
      }
      this.prloaderRun = false;
    },err => {
      this.prloaderRun = false;
      this.alertService.error("Error",err.error.error);
  });

    //console.log(payload);
  }

}
