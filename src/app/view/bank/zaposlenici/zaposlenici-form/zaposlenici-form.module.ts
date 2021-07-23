import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZaposleniciFormRoutingModule } from './zaposlenici-form-routing.module';
import { ZaposleniciFormComponent } from './zaposlenici-form.component';
import { FormsModule } from '@angular/forms';
import { MyComponentsModule } from 'src/app/view/components/my-components.module';


@NgModule({
  declarations: [
    ZaposleniciFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ZaposleniciFormRoutingModule,
    MyComponentsModule
  ]
})
export class ZaposleniciFormModule { }
