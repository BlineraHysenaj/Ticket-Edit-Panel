import { Component } from '@angular/core';
import { Subtask } from './subtask.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-subtask',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './subtask.component.html',
  styleUrl: './subtask.component.scss'
})
export class SubtaskComponent {
  subtasks: Subtask[] = [];
  newSubtaskName: string = '';
  subtaskCount: number = 0;

  addSubtask() {
    if (this.newSubtaskName.trim()) {
      this.subtasks.push({ name: this.newSubtaskName, completed: false, editing: false });
      this.newSubtaskName = '';
      this.subtaskCount = this.subtasks.length;
      
      // Focus on the new subtask input field
      setTimeout(() => {
        const lastInput = document.querySelector('.subtask-input:last-child') as HTMLElement;
        if (lastInput) lastInput.focus();
      }, 0);
    }
  }

  // Function to edit a subtask
  editSubtask(subtask: Subtask) {
    subtask.editing = true;
    setTimeout(() => {
      const input = document.querySelector(`.subtask-input-${this.subtasks.indexOf(subtask)}`) as HTMLElement;
      if (input) input.focus();
    }, 0);
  }

  // Function to save edited subtask
  saveSubtask(subtask: Subtask) {
    subtask.editing = false;
  }

  // Function to toggle completion
  toggleCompletion(subtask: Subtask) {
    subtask.completed = !subtask.completed;
  }
}
