import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAdd(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={submit} className="mb-3">

      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button className="btn btn-primary w-100">
        Add Task
      </button>

    </form>
  );
}
