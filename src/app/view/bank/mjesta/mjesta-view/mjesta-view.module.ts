import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MjestaViewRoutingModule } from './mjesta-view-routing.module';
import { MjestaViewComponent } from './mjesta-view.component';
import { MjestaTableComponent } from '../mjesta-table/mjesta-table.component';


@NgModule({
  declarations: [
    MjestaViewComponent,
    MjestaTableComponent
  ],
  imports: [
    CommonModule,
    MjestaViewRoutingModule
  ]
})
export class MjestaViewModule { }
