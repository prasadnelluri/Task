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

  constructor(private _http:HttpServicesService, 
              private _session:SessionService,
              private alertService:AlertsService,
              private router:Router) { }
  Products:any = [];
  ngOnInit(): void {
    this.getProducts();
    console.log("init"+ this.Products)
  }

  getProducts(){
      this._http.GetAllProducts().subscribe((res:any)=>{
      this.Products = res
    })
  }

  doFilter($event:any){
    if($event.target.value.length>=3){
      //console.log($event.target.value);

      var startsWithN = this.Products.filter(
        (product:any) => { 
          if((product['orderDetail'].slice(0,3).toLowerCase()) == $event.target.value) { 
            console.log(product);
            return product;
           } 
        });
        this.Products = startsWithN;                  
    }else{
      this.Products=this.Products;
    }
  }

  onSearchCustomer($event:any){
    this.getProducts();
  }

  logOut(){
    this._session.logOut();
    this.router.navigate(['login']);
    this.alertService.success('Signout !',' Scessfully LogOut.');
  }

}
