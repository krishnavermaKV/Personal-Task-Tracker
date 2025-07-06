import { Bar } from "../component/Bar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Bar />

      <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Welcome to Task Tracker 🎯
        </h1>

        <p className="text-lg max-w-2xl mb-8">
          This is your personal task tracking application where you can:
          <br />
          ✅ Track which tasks are completed or pending,
          <br />
          ➕ Add new tasks,
          <br />
          📝 Edit or delete existing tasks.
          <br />
          <br />
          Stay organized and boost your productivity!
        </p>

        <button
          onClick={() => navigate("/tasks")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          🚀 Get Started
        </button>
      </div>
    </div>
  );
};
