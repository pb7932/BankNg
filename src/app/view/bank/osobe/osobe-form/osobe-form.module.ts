import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsobeFormRoutingModule } from './osobe-form-routing.module';
import { OsobeFormComponent } from './osobe-form.component';
import { FormsModule } from '@angular/forms';
import { MyComponentsModule } from 'src/app/view/components/my-components.module';


@NgModule({
  declarations: [
    OsobeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OsobeFormRoutingModule,
    MyComponentsModule
  ]
})
export class OsobeFormModule { }
