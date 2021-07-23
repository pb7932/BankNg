import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorterComponent } from './sorter/sorter.component';
import { PagerComponent } from './pager/pager.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';



@NgModule({
  declarations: [
    SorterComponent,
    PagerComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SorterComponent,
    PagerComponent,
    DeleteModalComponent
  ]
})
export class MyComponentsModule { }
