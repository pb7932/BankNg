import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KlijentiHelper } from 'src/app/model/bank/klijenti/klijenti';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseViewComponent } from 'src/app/shared/form/my-base-view.component';

@Component({
  selector: 'app-klijenti-view',
  templateUrl: './klijenti-view.component.html',
  styleUrls: ['./klijenti-view.component.css']
})
export class KlijentiViewComponent extends MyBaseViewComponent {
  @ViewChild('klijenti') klijenti;

  constructor(
    private routerView1: Router,
    private routeView1: ActivatedRoute,
    private myDataService1: MyDataService
  ) 
  { 
    super(routerView1, routeView1, myDataService1, KlijentiHelper.routeName)
  }

  myNgOnInit(): void {
  }

  ngAfterViewInit() {
    this.klijenti.fetchData()
  }

  reload() {
    this.klijenti.fetchData();
  }
}
