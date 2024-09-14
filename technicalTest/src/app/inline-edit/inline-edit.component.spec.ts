import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.css']
})
export class EditableFieldComponent {
  @Input() fieldName!: string;
  @Input() fieldValue!: string;
  @Output() fieldSave = new EventEmitter<string>();

  isEditing = false;
  inputValue: string = '';

  ngOnInit() {
    this.inputValue = this.fieldValue;
  }

  toggleEdit() {
    this.isEditing = true;
  }

  saveField() {
    this.fieldSave.emit(this.inputValue);
    this.isEditing = false;
  }
}
