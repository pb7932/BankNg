import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      jQuery('#my-app-header,#my-left-menu,#my-app-footer').hide();
    },0)
  }

  login() {
    setTimeout(() => {
      jQuery('#my-app-header,#my-left-menu,#my-app-footer').show();
      this.router.navigate(['/']);
    },100)
  }

}
