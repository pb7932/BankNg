import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public paths: string[] = [];

  constructor() { 
    this.paths.push('Home')
  }

  ngOnInit(): void {
  }

  initPath(): void {
    this.paths = [];
    this.paths.push('Home')
  }

  setBreadcrumb(path: string): void {
    let breadcrumbs = path.split('/');
    for ( let breadcrumb of breadcrumbs) {
      this.paths.push(breadcrumb);
    }
  }

  unsetBreadcrumb(): void {
    this.paths.pop();
  }

}
