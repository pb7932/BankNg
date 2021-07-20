import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsobeFormRoutingModule } from './osobe-form-routing.module';
import { OsobeFormComponent } from './osobe-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OsobeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OsobeFormRoutingModule
  ]
})
export class OsobeFormModule { }
