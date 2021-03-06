import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KlijentiViewRoutingModule } from './klijenti-view-routing.module';
import { KlijentiViewComponent } from './klijenti-view.component';
import { KlijentiTableComponent } from '../klijenti-table/klijenti-table.component';
import { MyPipesModule } from 'src/app/shared/pipes/my-pipes.module';
import { MyComponentsModule } from 'src/app/view/components/my-components.module';


@NgModule({
  declarations: [
    KlijentiViewComponent,
    KlijentiTableComponent, 
  ],
  imports: [
    CommonModule,
    KlijentiViewRoutingModule,
    MyPipesModule,
    MyComponentsModule
  ]
})
export class KlijentiViewModule { }
