import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodySimpleComponent } from './body-simple.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BodySimpleComponent
  ],
  exports: [
    BodySimpleComponent
  ]
})
export class BodySimpleModule { }
