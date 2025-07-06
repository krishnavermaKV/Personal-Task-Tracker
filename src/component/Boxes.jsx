import { Link, useNavigate } from "react-router-dom";

export const Boxes = ({ id, title, description, completed, createdAt, refreshTasks }) => {
  const navigate = useNavigate();

  const handleComplete = (e) => {
    e.preventDefault();

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    refreshTasks();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/edit/${id}`);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    refreshTasks();
  };

  // Format the date
  const formatDate = (isoString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(isoString).toLocaleDateString('en-GB', options); // e.g., 06 Jul 2025
  };

  return (
    <Link to={`/post/${id}`}>
      <div className="bg-[#0f172a] rounded-xl overflow-hidden shadow-md border border-blue-700 w-full max-w-2xl mx-auto hover:scale-[1.01] transition-transform duration-150 cursor-pointer">
        <div className="flex justify-between items-center bg-[#1e3a8a] text-white px-4 py-3">
          <h2 className="font-semibold text-lg">
            {title}{" "}
            <span className="text-sm text-blue-200 font-normal">
              ({formatDate(createdAt)})
            </span>
          </h2>
          <div className="text-blue-200">
            {completed ? "✅ Done" : "🕒 Pending"}
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#0f172a] p-6 space-y-3">
          <p className="text-white">{description}</p>
          <div className="flex gap-4 mt-4">
            {!completed && (
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleComplete}
              >
                Mark Complete
              </button>
            )}
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
