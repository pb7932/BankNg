import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MjestaHelper } from 'src/app/model/bank/mjesta/mjesta';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseTableComponent } from 'src/app/shared/form/my-base-table-component';

@Component({
  selector: 'app-mjesta-table',
  templateUrl: './mjesta-table.component.html',
  styleUrls: ['./mjesta-table.component.css']
})
export class MjestaTableComponent extends MyBaseTableComponent {

  constructor(
    private routerTable1: Router,
    private routeTable1: ActivatedRoute,
    private myDataService1: MyDataService
  ) { 
    super(routerTable1, routeTable1, MjestaHelper.routeName, myDataService1);
  }

  myNgOnInit(): void {
  }

  fetchData() {
    super.fetchData('getmjesta');
  }

  fetchDataOk() {
    
  }

  sort(event: any) {
    this.fetchData();
  }

  getNextPage(event: any) {
    this.fetchData();
  }

}
