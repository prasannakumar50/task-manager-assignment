import { TaskService } from './task.service';

describe('TaskService', () => {

  let service: TaskService;

  beforeEach(() => {
    service = new TaskService();
  });

  it('should add a task', () => {
    service.add('Test', 'Demo');
    expect(service.tasks.length).toBe(1);
  });

});
