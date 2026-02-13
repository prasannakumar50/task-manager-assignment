import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html'
})
export class FilterBarComponent {

  constructor(public service: TaskService) {}

  setFilter(value: string) {
    this.service.filter = value;
  }
}
