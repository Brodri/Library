import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { FormsModule }   from '@angular/forms';

import { TablePrimaryComponent } from './table-primary.component';
import { InputSimpleModule } from '../input-simple/input-simple.module';
import { StateSelectModule } from '../state-select/state-select.module';
import { SelectOptionModule } from '../select-option/select-option.module';
import { CheckboxModule } from '../checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    InputSimpleModule,
    FormsModule,
    StateSelectModule,
    SelectOptionModule,
    CheckboxModule
  ],
  declarations: [
    TablePrimaryComponent,
    FilterPipe
  ],
  exports: [
    TablePrimaryComponent
  ],
})
export class TablePrimaryModule { }
