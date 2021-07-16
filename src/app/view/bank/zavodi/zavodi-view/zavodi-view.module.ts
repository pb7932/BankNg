import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZavodiViewRoutingModule } from './zavodi-view-routing.module';
import { ZavodiViewComponent } from './zavodi-view.component';
import { ZavodiTableComponent } from '../zavodi-table/zavodi-table.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ZavodiViewComponent,
    ZavodiTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ZavodiViewRoutingModule
  ]
})
export class ZavodiViewModule { }
