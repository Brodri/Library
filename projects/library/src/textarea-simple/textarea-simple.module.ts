import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextareaSimpleComponent } from './textarea-simple.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TextareaSimpleComponent
  ],
  exports: [
    TextareaSimpleComponent
  ]
})
export class TextareaSimpleModule { }
