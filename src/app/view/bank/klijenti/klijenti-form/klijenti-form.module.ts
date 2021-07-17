import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KlijentiFormRoutingModule } from './klijenti-form-routing.module';
import { KlijentiFormComponent } from './klijenti-form.component';


@NgModule({
  declarations: [
    KlijentiFormComponent
  ],
  imports: [
    CommonModule,
    KlijentiFormRoutingModule
  ]
})
export class KlijentiFormModule { }
