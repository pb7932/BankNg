import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZavodiViewRoutingModule } from './zavodi-view-routing.module';
import { ZavodiViewComponent } from './zavodi-view.component';


@NgModule({
  declarations: [
    ZavodiViewComponent
  ],
  imports: [
    CommonModule,
    ZavodiViewRoutingModule
  ]
})
export class ZavodiViewModule { }
