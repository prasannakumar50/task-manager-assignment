import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import useTasks from "./hooks/useTasks";

export default function App() {
  const {
    filteredTasks,
    addTask,
    deleteTask,
    toggleTask,
    filter,
    setFilter,
  } = useTasks();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">
            <div className="card-body">

              <h3 className="text-center mb-4">Task Manager</h3>

              <TaskForm onAdd={addTask} />
              <FilterBar filter={filter} setFilter={setFilter} />
              <TaskList
                tasks={filteredTasks}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
