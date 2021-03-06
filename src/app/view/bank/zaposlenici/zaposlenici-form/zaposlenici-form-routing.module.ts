import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZaposleniciFormComponent } from './zaposlenici-form.component';

const routes: Routes = [
  {
    path: '', component: ZaposleniciFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZaposleniciFormRoutingModule { }
