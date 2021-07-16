import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MjestaFormRoutingModule } from './mjesta-form-routing.module';
import { MjestaFormComponent } from '../mjesta-form/mjesta-form.component';

@NgModule({
  declarations: [
    MjestaFormComponent,
  ],
  imports: [
    CommonModule,
    MjestaFormRoutingModule
  ]
})
export class MjestaFormModule { }
