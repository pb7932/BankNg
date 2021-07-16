import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZavodiFormRoutingModule } from './zavodi-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ZavodiFormRoutingModule
  ]
})
export class ZavodiFormModule { }
