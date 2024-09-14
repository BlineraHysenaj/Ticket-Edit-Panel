import { NgModule } from '@angular/core';
import { EditableFieldComponent } from '../app/inline-edit/inline-edit.component.spec';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
      EditableFieldComponent,
      FormsModule 
    ]
  })
  export class AppModule { }
