import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZaposleniciFormRoutingModule } from './zaposlenici-form-routing.module';
import { ZaposleniciFormComponent } from './zaposlenici-form.component';


@NgModule({
  declarations: [
    ZaposleniciFormComponent
  ],
  imports: [
    CommonModule,
    ZaposleniciFormRoutingModule
  ]
})
export class ZaposleniciFormModule { }
