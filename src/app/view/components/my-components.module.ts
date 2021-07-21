import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorterComponent } from './sorter/sorter.component';



@NgModule({
  declarations: [
    SorterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SorterComponent
  ]
})
export class MyComponentsModule { }
