import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Bar = () => {
  const navigate = useNavigate();
  const [firstLetter, setFirstLetter] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setFirstLetter(username.charAt(0).toUpperCase());
    } else {
      setFirstLetter(null);
    }
  }, []);

  return (
    <div className="grid grid-cols-12 items-center px-4 py-2 bg-blue-500 text-white shadow-md">
      {/* Left: App Name */}
      <div className="col-span-3 font-bold text-lg">
        Task Tracker
      </div>

      {/* Right: Action Buttons */}
      <div className="col-span-9 flex justify-end items-center gap-3">
        {/* See Tasks Button */}
        <button
          onClick={() => navigate("/tasks")}
          className="bg-white text-blue-600 font-semibold text-sm sm:text-base px-4 py-2 rounded-full hover:bg-gray-300"
        >
          📝 See Tasks
        </button>

        {/* Add Task Button */}
        <button
          onClick={() => navigate("/addtask")}
          className="bg-white text-blue-600 font-semibold text-sm sm:text-base px-4 py-2 rounded-full hover:bg-gray-300"
        >
          ✅ Add Task
        </button>

        {/* User Avatar or Signup */}
        {firstLetter ? (
          <div
            className="bg-white text-blue-600 font-bold w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-gray-200 cursor-pointer text-sm sm:text-base"
            title="Logged in user"
          >
            {firstLetter}
          </div>
        ) : (
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-blue-600 font-semibold text-sm sm:text-base px-4 py-2 rounded-full hover:bg-gray-300"
          >
             Signup
          </button>
        )}
      </div>
    </div>
  );
};
