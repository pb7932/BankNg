import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZavodiViewRoutingModule } from './zavodi-view-routing.module';
import { ZavodiViewComponent } from './zavodi-view.component';
import { ZavodiTableComponent } from '../zavodi-table/zavodi-table.component';
import { RouterModule } from '@angular/router';
import { MyZavodPipe } from 'src/app/shared/pipes/my-text.pipe';
import { MyPipesModule } from 'src/app/shared/pipes/my-pipes.module';


@NgModule({
  declarations: [
    ZavodiViewComponent,
    ZavodiTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MyPipesModule,
    ZavodiViewRoutingModule
  ]
})
export class ZavodiViewModule { }
