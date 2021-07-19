import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MjestaFormRoutingModule } from './mjesta-form-routing.module';
import { MjestaFormComponent } from '../mjesta-form/mjesta-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MjestaFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MjestaFormRoutingModule
  ]
})
export class MjestaFormModule { }
