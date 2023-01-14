import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tab-main',
  templateUrl: './my-tab-main.component.html',
  styleUrls: ['./my-tab-main.component.scss']
})
export class MyTabMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.display = "Hide";
  }

  display:any = "Hide";

  hidden = false;
  // hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    if(this.display == "Show"){
      this.display = "Hide";
    }else{
      this.display = "Show";
    }
  }
}
