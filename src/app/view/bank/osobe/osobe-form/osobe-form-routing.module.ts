import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsobeFormComponent } from './osobe-form.component';

const routes: Routes = [
  {
    path: '', component: OsobeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OsobeFormRoutingModule { }
