import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MjestaHelper } from 'src/app/model/bank/mjesta/mjesta';
import { BaseRequestDTO } from 'src/app/model/DTO/base-request-DTO';
import { MySorter } from 'src/app/model/DTO/my-sorter';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseViewComponent } from 'src/app/shared/form/my-base-view.component';

@Component({
  selector: 'app-mjesta-view',
  templateUrl: './mjesta-view.component.html',
  styleUrls: ['./mjesta-view.component.css']
})
export class MjestaViewComponent extends MyBaseViewComponent {
  @ViewChild('mjesta') mjesta;

  constructor(
    private routerView1: Router,
    private routeView1: ActivatedRoute,
    private myDataService1: MyDataService,
  ) 
  { 
    super(routerView1, routeView1, myDataService1, MjestaHelper.routeName)
  }

  myNgOnInit() {

  }

  ngAfterViewInit() {
    this.mjesta.fetchData('getmjesta');
  }

  reload() {
    this.mjesta.fetchData('getmjesta');
  }

}
