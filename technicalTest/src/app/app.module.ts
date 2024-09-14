import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditableFieldComponent } from '../app/inline-edit/inline-edit.component.spec';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SubtaskComponent } from './subtask/subtask.component';

@NgModule({
  declarations: [
    AppComponent,
    SubtaskComponent
  ],
  imports: [
    EditableFieldComponent,
    FormsModule,
    BrowserModule,
    SubtaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 

})
export class AppModule { }
