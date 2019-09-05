import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSimpleComponent } from './form-simple.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormSimpleComponent
  ],
  exports: [
    FormSimpleComponent
  ]
})
export class FormSimpleModule { }
