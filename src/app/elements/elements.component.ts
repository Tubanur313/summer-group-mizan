import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  btn = document.querySelector('.video-wrap');
  btn.onclick = function(){
    btn.classList.add('active')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
