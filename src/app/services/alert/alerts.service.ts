import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private messageService: MessageService) { }

  error(title:any,message:any){
    this.messageService.add({severity:'error', summary: title, detail: message}); 
  }

  success(title:any,message:any){
    this.messageService.add({severity:'success', summary: title, detail: message});
  }
  

}
