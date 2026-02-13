export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">

      <div>
        <h6
          className={task.completed ? "text-decoration-line-through" : ""}
        >
          {task.title}
        </h6>
        <small className="text-muted">{task.description}</small>
      </div>

      <div>
        <button
          className="btn btn-success btn-sm me-2"
          onClick={() => onToggle(task.id)}
        >
          ✓
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(task.id)}
        >
          ✕
        </button>
      </div>

    </li>
  );
}
