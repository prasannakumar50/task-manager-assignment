import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule], // required for [(ngModel)]
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {

  title = '';
  description = '';

  constructor(private service: TaskService) {}

  addTask() {
    if (!this.title.trim()) return;

    this.service.add(this.title, this.description);

    this.title = '';
    this.description = '';
  }
}
