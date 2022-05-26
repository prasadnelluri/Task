import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http/http-services.service';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { min } from 'rxjs';

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

  loginForm = new FormGroup({
                            username: new FormControl('', [Validators.required]),
                            password: new FormControl('', [Validators.required])
                          });

      
  onSubmit(){

      this.prloaderRun = true;

      let payload:any = this.loginForm.value;
      
      this._api.UserLogin(payload).subscribe((res:any)=>{
  
        if(res){
          this._session.storeSessionDetails(res);
          this._session.storeAuthToken(res.key);
          this.router.navigate(['dashboard']);
          this.alertService.success('Done !',' Successfully Login.');
        }
        this.prloaderRun = false;
      },err => {
        this.prloaderRun = false;
        this.alertService.error("Error",err.error.error);
    });
    
    }   
    
    
    


}
