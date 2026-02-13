export default function FilterBar({ filter, setFilter }) {
  const filters = ["all", "completed", "pending"];

  return (
    <div className="btn-group w-100 mb-3">
      {filters.map((f) => (
        <button
          key={f}
          className={`btn ${
            filter === f ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
