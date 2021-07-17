import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZaposleniciTableComponent } from '../zaposlenici-table/zaposlenici-table.component';

const routes: Routes = [
  {
    path: '', component: ZaposleniciTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZaposleniciFormRoutingModule { }
