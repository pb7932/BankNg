import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZaposleniciViewRoutingModule } from './zaposlenici-view-routing.module';
import { ZaposleniciViewComponent } from './zaposlenici-view.component';
import { ZaposleniciTableComponent } from '../zaposlenici-table/zaposlenici-table.component';
import { MyPipesModule } from 'src/app/shared/pipes/my-pipes.module';


@NgModule({
  declarations: [
    ZaposleniciViewComponent,
    ZaposleniciTableComponent
  ],
  imports: [
    CommonModule,
    ZaposleniciViewRoutingModule,
    MyPipesModule
  ]
})
export class ZaposleniciViewModule { }
