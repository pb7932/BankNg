import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MjestaViewComponent } from './mjesta-view.component';

const routes: Routes = [
  {
    path: '', component: MjestaViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MjestaViewRoutingModule { }
