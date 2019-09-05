import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionComponent } from './select-option.component';
import { FormsModule }   from '@angular/forms';
import { FilterPipe} from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SelectOptionComponent,
    FilterPipe
  ],
  exports: [
    SelectOptionComponent
  ]
})
export class SelectOptionModule { }
