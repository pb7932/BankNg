import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KlijentiFormRoutingModule } from './klijenti-form-routing.module';
import { KlijentiFormComponent } from './klijenti-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KlijentiFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KlijentiFormRoutingModule
  ]
})
export class KlijentiFormModule { }
