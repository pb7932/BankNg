import { Component } from '@angular/core';
import * as $  from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bankNg';

  toggleSidebar() {
    //toggle sidebar, not able to import sidebbar toggle function from fomantic-ui
  }
}
