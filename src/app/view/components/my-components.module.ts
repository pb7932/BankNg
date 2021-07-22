import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorterComponent } from './sorter/sorter.component';
import { PagerComponent } from './pager/pager.component';



@NgModule({
  declarations: [
    SorterComponent,
    PagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SorterComponent
  ]
})
export class MyComponentsModule { }
