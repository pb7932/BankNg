import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MjestaViewRoutingModule } from './mjesta-view-routing.module';
import { MjestaViewComponent } from './mjesta-view.component';
import { MjestaTableComponent } from '../mjesta-table/mjesta-table.component';
import { MyComponentsModule } from 'src/app/view/components/my-components.module';


@NgModule({
  declarations: [
    MjestaViewComponent,
    MjestaTableComponent,
  ],
  imports: [
    CommonModule,
    MyComponentsModule,
    MjestaViewRoutingModule,
  ]
})
export class MjestaViewModule { }
