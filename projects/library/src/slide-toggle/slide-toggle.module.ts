import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SlideToggleComponent } from './slide-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SlideToggleComponent
  ],
  exports: [
    SlideToggleComponent
  ]
})
export class SlideToggleModule { }
