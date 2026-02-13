import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] =
    JSON.parse(localStorage.getItem('tasks') || '[]');

  filter: string = 'all';

  private save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  add(title: string, description: string) {
    this.tasks.push({
      id: Date.now(),
      title,
      description,
      completed: false
    });
    this.save();
  }

  delete(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.save();
  }

  toggle(id: number) {
    this.tasks = this.tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.save();
  }

  get filteredTasks() {
    if (this.filter === 'completed')
      return this.tasks.filter(t => t.completed);

    if (this.filter === 'pending')
      return this.tasks.filter(t => !t.completed);

    return this.tasks;
  }
}
