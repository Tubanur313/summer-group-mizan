import { Component, OnInit } from '@angular/core';
import { MyBsSubComponent } from '../entry-components/my-bs-sub/my-bs-sub.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-my-bs-main',
  templateUrl: './my-bs-main.component.html',
  styleUrls: ['./my-bs-main.component.scss']
})
export class MyBsMainComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(public bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(
      MyBsSubComponent,{
        data: "Data from MyBsMainComponent"
      }
      );
  }
}


