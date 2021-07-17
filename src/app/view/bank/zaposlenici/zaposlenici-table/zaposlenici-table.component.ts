import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZaposleniciHelper } from 'src/app/model/bank/zaposlenici/zaposlenici';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseTableComponent } from 'src/app/shared/form/my-base-table-component';

@Component({
  selector: 'app-zaposlenici-table',
  templateUrl: './zaposlenici-table.component.html',
  styleUrls: ['./zaposlenici-table.component.css']
})
export class ZaposleniciTableComponent extends MyBaseTableComponent {
  errMsg: string = '';

  constructor(
    private routerTable1: Router,
    private routeTable1: ActivatedRoute,
    private myDataService1: MyDataService
  ) 
  {
    super(routerTable1, routeTable1, ZaposleniciHelper.routeName, myDataService1)
   }

  myNgOnInit(): void {
  }

  fetchData(name: string) {
    super.fetchData(name)
  }

  fetchDataOk() {
    if(this.items) {
      for(let zaposlenik of this.items) {
        super.fetchDataById('getosobebyid', zaposlenik.id_osoba, zaposlenik)
      }
      for(let zaposlenik of this.items) {
        super.fetchDataById2('getzavodibyid', zaposlenik.id_zavod, zaposlenik)
      }
    }
    else {
      this.errMsg = 'Doslo je do greske kod dohvata podataka.'
    }
  }

}
