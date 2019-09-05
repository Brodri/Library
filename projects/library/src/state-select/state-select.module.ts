import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateSelectComponent } from './state-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StateSelectComponent
  ],
  exports: [
    StateSelectComponent
  ]
})
export class StateSelectModule { }
