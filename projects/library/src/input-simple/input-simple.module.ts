import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { InputSimpleComponent } from './input-simple.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputSimpleComponent
  ],
  exports: [
    InputSimpleComponent
  ]
})
export class InputSimpleModule { }
