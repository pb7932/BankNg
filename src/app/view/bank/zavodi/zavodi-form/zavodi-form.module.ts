import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZavodiFormRoutingModule } from './zavodi-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZavodiFormComponent } from './zavodi-form.component';
import { MyComponentsModule } from 'src/app/view/components/my-components.module';


@NgModule({
  declarations: [
    ZavodiFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ZavodiFormRoutingModule,
    MyComponentsModule
  ]
})
export class ZavodiFormModule { }
