import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSimpleComponent } from './button-simple.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonSimpleComponent],
  exports: [
    ButtonSimpleComponent // <-- this!
  ]
})
export class ButtonSimpleModule { }
