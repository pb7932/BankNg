import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZavodiViewComponent } from './zavodi-view.component';

const routes: Routes = [
  {
    path: '', component: ZavodiViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZavodiViewRoutingModule { }
