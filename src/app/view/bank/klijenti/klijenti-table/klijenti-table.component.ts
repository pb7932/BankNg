import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KlijentiHelper } from 'src/app/model/bank/klijenti/klijenti';
import { BaseRequestDTO } from 'src/app/model/DTO/base-request-DTO';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseTableComponent } from 'src/app/shared/form/my-base-table-component';

@Component({
  selector: 'app-klijenti-table',
  templateUrl: './klijenti-table.component.html',
  styleUrls: ['./klijenti-table.component.css']
})
export class KlijentiTableComponent extends MyBaseTableComponent {
  errMsg: string = '';

  constructor(
    private routerTable1: Router,
    private routeTable1: ActivatedRoute,
    private myDataService1: MyDataService,
  ) 
  { 
    super(routerTable1, routeTable1, KlijentiHelper.routeName, myDataService1)
  }

  myNgOnInit(): void {
  }

  fetchData(name: string) {
    super.fetchData(name)
  }

  fetchDataOk() {
    if(this.items) {
      for(let klijent of this.items) {
        super.fetchDataById('getosobebyid', klijent.id_osoba, klijent);
      }
    }
    else {
      this.errMsg = 'Doslo je do pogreske kod ucitavanja podataka';
    }
  }
}
