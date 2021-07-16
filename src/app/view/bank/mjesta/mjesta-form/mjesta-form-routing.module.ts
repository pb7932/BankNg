import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MjestaFormComponent } from './mjesta-form.component';

const routes: Routes = [
  {
    path: '', component: MjestaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MjestaFormRoutingModule { }
