import { Component, OnInit } from '@angular/core';
declare var jQuery: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'bankNg';

  leftSidebar: any;

  ngOnInit(): void {
   this.leftSidebar = jQuery('#sidebar').sidebar('setting', 'transition', 'overlay');
   console.log(this.leftSidebar)
  }

  toggleSidebar() {
    this.leftSidebar.sidebar('toggle');
  }
}
