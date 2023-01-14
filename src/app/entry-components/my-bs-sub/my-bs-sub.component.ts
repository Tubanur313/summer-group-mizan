import { Component,Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet/bottom-sheet-ref';
import {MatBottomSheet} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-my-bs-sub',
  templateUrl: './my-bs-sub.component.html',
  styleUrls: ['./my-bs-sub.component.scss']
})
export class MyBsSubComponent implements OnInit {

  ngOnInit(): void {
    // alert()
  }

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data:any
  ){

  }

  // constructor(public bottomSheetRef: MatBottomSheetRef<MyBsSubComponent>) {}

  // openLink(event: MouseEvent): void {
  //   this.bottomSheetRef.dismiss();
  //   event.preventDefault();
  // }

  // constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    // this._bottomSheetRef.dismiss();
    event.preventDefault();
  }


}
