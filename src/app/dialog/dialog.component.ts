import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/model';
import { DiceComponent } from '../entry-components/dice/dice.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  
  // ngDoCheck(){
  // }
  // ngAfterContentChecked(){
  // }

  // ngAfterViewChecked(){
  // }

  rand1:string = ""
  rand2:string = ""
  // dices:[DialogData] = [{title:"",img_path:""}];
  dices1:DialogData = {title:"",img_path:""};
  dices2:DialogData = {title:"",img_path:""};
  dataArr:[DialogData,DialogData] = [this.dices1,this.dices2];

  ngOnInit(): void {
    this.generateRandom();
  }

  generateRandom(){
    this.rand1 = "";
    this.rand2 = "";
    // this.dices = [{title:"",img_path:""}];
    this.dices1 = {title:"",img_path:""};
    this.dices2 = {title:"",img_path:""};

    this.dataArr = [
      this.dices1,
      this.dices2
    ]

    this.rand1 = (Math.floor((Math.random() * 6) + 1)).toString();
    this.rand2 = (Math.floor((Math.random() * 6) + 1)).toString();
    
    // this.dices= [
    //   {title: ""+this.rand, 
    //   img_path: "dice-"+this.rand+".png",
    //   },
    // ];
    this.dices1= 
      {title: this.rand1, 
      img_path: "dice-"+this.rand1+".png",
      };

    this.dices2= 
      {title: this.rand2, 
      img_path: "dice-"+this.rand2+".png",
      };
    this.dataArr[0] = this.dices1
    this.dataArr[1] = this.dices2
  }


  constructor(public dialog: MatDialog) { }

  openDialog() {
    
    this.dialog.open(DiceComponent,
      {
        width:"12rem",
        data: this.dataArr
      }
      );
      console.log(this.dataArr);
  }

}
