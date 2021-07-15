import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }

  leftSidebar: any;

  ngOnInit(): void {
   this.leftSidebar = jQuery('#sidebar').sidebar('setting', 'transition', 'overlay');
   console.log(this.leftSidebar)
  }

  toggleSidebar() {
    this.leftSidebar.sidebar('toggle');
  }

}
