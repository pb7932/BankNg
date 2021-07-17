import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZavodiHelper } from 'src/app/model/bank/zavodi/zavodi';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseTableComponent } from 'src/app/shared/form/my-base-table-component';

@Component({
  selector: 'app-zavodi-table',
  templateUrl: './zavodi-table.component.html',
  styleUrls: ['./zavodi-table.component.css']
})
export class ZavodiTableComponent extends MyBaseTableComponent {
 
  constructor(
    private routerTable1: Router,
    private routeTable1: ActivatedRoute,
    private myDataService1: MyDataService,
  ) {
    super(routerTable1, routeTable1, ZavodiHelper.routeName , myDataService1)
   }

  myNgOnInit() {

  }

  showItems() {
    console.log(this.items);
  }

  fetchDataOk() {
    
  }
}
