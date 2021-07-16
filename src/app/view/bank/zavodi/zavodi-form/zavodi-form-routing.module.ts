import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZavodiFormComponent } from './zavodi-form.component';

const routes: Routes = [
  {
    path: '', component: ZavodiFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZavodiFormRoutingModule { }
