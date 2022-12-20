import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {
  userName:string = "Peter"; 
  table_span_property = "2";
  my_light = 0;
  my_color_class = "yellow_cl";
  is_on = false;
  constructor() {
    if(this.my_light==0){
      this.my_color_class = "yellow_cl";
    }else if(this.my_light==1){
      this.my_color_class = "green_cl";
    }else{
      this.my_color_class = "red_cl";
    }
   }

  ngOnInit(): void {
  }


  showData(){ 
   this.is_on = true;
 } 
}
