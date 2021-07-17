import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZaposleniciViewRoutingModule } from './zaposlenici-view-routing.module';
import { ZaposleniciViewComponent } from './zaposlenici-view.component';
import { ZaposleniciTableComponent } from '../zaposlenici-table/zaposlenici-table.component';


@NgModule({
  declarations: [
    ZaposleniciViewComponent,
    ZaposleniciTableComponent
  ],
  imports: [
    CommonModule,
    ZaposleniciViewRoutingModule
  ]
})
export class ZaposleniciViewModule { }
