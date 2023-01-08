import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/model';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  // ran:any;

  ngOnInit(): void {
  }

  // ran = Math.floor((Math.random() * 6) + 1);  

  // dices= [
  //   {title: ""+this.ran, 
  //   img_path: "dice-"+this.ran+".png",
  //   },
  // ];

  constructor(
    public dialogRef: MatDialogRef<DiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [DialogData,DialogData],
  ) {
    data[0].img_path = "../../assets/images/" + data[0].img_path;
    data[1].img_path = "../../assets/images/" + data[1].img_path;
   }

   onNoClick(): void{
    console.log(this.data);

    this.dialogRef.close();
    console.log("closed");
   }
  

}
