import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from 'src/app/services/http/http-services.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  private productsData:any;
  Products:any = [];
  searchTerm:string='';

  constructor(private _http:HttpServicesService, 
              private _session:SessionService,
              private alertService:AlertsService,
              private router:Router) { }
 
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsData =   this._http.GetAllProducts().subscribe((res:any)=>{
      this.Products = res
    })
  }

  logOut(){
    this._session.logOut();
    this.router.navigate(['login']);
    this.alertService.success('Done !',' Logged Out Successfully');
  }

  ngOnDestroy() {
    this.productsData.unsubscribe();
  }

}
