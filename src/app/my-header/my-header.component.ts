import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {
  title = "Tutor";
  constructor() { }

  ngOnInit(): void {
  }

  showData() {
    console.log("button is clicked!"); 
   
  }



}
