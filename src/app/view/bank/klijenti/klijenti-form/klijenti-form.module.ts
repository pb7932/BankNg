import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KlijentiFormRoutingModule } from './klijenti-form-routing.module';
import { KlijentiFormComponent } from './klijenti-form.component';
import { FormsModule } from '@angular/forms';
import { MyComponentsModule } from 'src/app/view/components/my-components.module';


@NgModule({
  declarations: [
    KlijentiFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KlijentiFormRoutingModule,
    MyComponentsModule
  ]
})
export class KlijentiFormModule { }
