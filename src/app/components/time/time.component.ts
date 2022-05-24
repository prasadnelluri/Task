import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.sass']
})
export class TimeComponent implements OnInit {

  date:any;
  constructor(){
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnInit(): void {
  }

}
