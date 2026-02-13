import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {

  @Input() task!: Task;

  constructor(private service: TaskService) {}

  toggle() {
    this.service.toggle(this.task.id);
  }

  delete() {
    this.service.delete(this.task.id);
  }
}
