import { describe, it, expect } from "vitest";

const filterTasks = (tasks) =>
  tasks.filter(t => t.completed);

describe("completed filter", () => {
  it("returns only completed tasks", () => {
    const tasks = [
      { completed: true },
      { completed: false },
    ];

    expect(filterTasks(tasks).length).toBe(1);
  });
});
