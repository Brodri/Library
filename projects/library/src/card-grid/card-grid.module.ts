import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardGridComponent
  ],
  exports: [
    CardGridComponent
  ]
})
export class CardGridModule { }
