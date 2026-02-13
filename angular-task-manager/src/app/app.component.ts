import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskFormComponent,
    TaskListComponent,
    FilterBarComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
