import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';
  errMsg: Observable<string>;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.errMsg = of('');

    setTimeout(() => {
      jQuery('#my-app-header,#my-left-menu,#my-app-footer').hide();
    },0)
  }

  login() {

    if(!this.user || !this.password) {
      this.errMsg = of('Please enter usernamea and password');
    }
    else {
      setTimeout(() => {
        jQuery('#my-app-header,#my-left-menu,#my-app-footer').show();
        this.router.navigate(['/home']);
      },100)
    }
  }
}
