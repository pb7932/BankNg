import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZavodiFormRoutingModule } from './zavodi-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZavodiFormComponent } from './zavodi-form.component';


@NgModule({
  declarations: [
    ZavodiFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ZavodiFormRoutingModule
  ]
})
export class ZavodiFormModule { }
