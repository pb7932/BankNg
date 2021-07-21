import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZaposleniciHelper } from 'src/app/model/bank/zaposlenici/zaposlenici';
import { BaseRequestDTO } from 'src/app/model/DTO/base-request-DTO';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseViewComponent } from 'src/app/shared/form/my-base-view.component';

@Component({
  selector: 'app-zaposlenici-view',
  templateUrl: './zaposlenici-view.component.html',
  styleUrls: ['./zaposlenici-view.component.css']
})
export class ZaposleniciViewComponent extends MyBaseViewComponent {
  @ViewChild('zaposlenici') zaposlenici;

  constructor(
    private routerView1: Router,
    private routeView1: ActivatedRoute,
    private myDataService1: MyDataService
  ) {
    super(routerView1, routeView1, myDataService1, ZaposleniciHelper.routeName)
   }

  myNgOnInit(): void {
  }

  ngAfterViewInit() {
    this.zaposlenici.fetchData('getzaposlenici')
  }

  reload() {
    this.zaposlenici.fetchData('getzaposlenici')
  }

}
