import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KlijentiViewComponent } from './klijenti-view.component';

const routes: Routes = [
  {
    path: '', component: KlijentiViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KlijentiViewRoutingModule { }
