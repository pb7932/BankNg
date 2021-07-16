import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseViewComponent } from 'src/app/shared/form/my-base-view.component';

@Component({
  selector: 'app-zavodi-view',
  templateUrl: './zavodi-view.component.html',
  styleUrls: ['./zavodi-view.component.css']
})
export class ZavodiViewComponent extends MyBaseViewComponent {
  @ViewChild('zavodi') zavodi;

  constructor(
    private routerView1: Router,
    private routeView1: ActivatedRoute,
    private myDataService1: MyDataService
  ) { 
    super(routerView1, routeView1, myDataService1, 'zavodi');
  }

  myNgOnInit(): void {
    this.zavodi.fetchData('getzavodi');
  }

}
