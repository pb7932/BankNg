import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MjestaViewRoutingModule } from './mjesta-view-routing.module';
import { MjestaViewComponent } from './mjesta-view.component';


@NgModule({
  declarations: [
    MjestaViewComponent
  ],
  imports: [
    CommonModule,
    MjestaViewRoutingModule
  ]
})
export class MjestaViewModule { }
