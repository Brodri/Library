import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderModule } from '../../projects/library/src/header/header.module';
import { FormSimpleModule } from '../../projects/library/src/form-simple/form-simple.module';
import { BodySimpleModule } from '../../projects/library/src/body-simple/body-simple.module';
import { InputSimpleModule } from '../../projects/library/src/input-simple/input-simple.module';
import { SelectOptionModule } from '../../projects/library/src/select-option/select-option.module';
import { InputFileModule } from '../../projects/library/src/input-file/input-file.module';
import { SlideToggleModule } from '../../projects/library/src/slide-toggle/slide-toggle.module';
import { CheckboxModule } from '../../projects/library/src/checkbox/checkbox.module';
import { RadioButtonModule } from '../../projects/library/src/radio-button/radio-button.module';
import { StateSelectModule } from '../../projects/library/src/state-select/state-select.module';
import { TextareaSimpleModule } from '../../projects/library/src/textarea-simple/textarea-simple.module';
import { PopupModule } from '../../projects/library/src/popup/popup.module';
import { SnackbarModule } from '../../projects/library/src/snackbar/snackbar.module';
import { DatepickerModule } from '../../projects/library/src/datepicker/datepicker.module';
import { CardModule } from '../../projects/library/src/card/card.module';
import { TablePrimaryModule } from '../../projects/library/src/table-primary/table-primary.module';
import { CardGridModule } from '../../projects/library/src/card-grid/card-grid.module';
import { ButtonSimpleModule } from '../../projects/library/src/button-simple/button-simple.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BodySimpleModule,
    FormSimpleModule,
    InputSimpleModule,
    SelectOptionModule,
    InputFileModule,
    SlideToggleModule,
    CheckboxModule,
    RadioButtonModule,
    StateSelectModule,
    TextareaSimpleModule,
    PopupModule,
    SnackbarModule,
    DatepickerModule,
    CardModule,
    CardGridModule,
    TablePrimaryModule,
    ButtonSimpleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
