import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KlijentiFormComponent } from './klijenti-form.component';

const routes: Routes = [
  {
    path: '', component: KlijentiFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KlijentiFormRoutingModule { }
