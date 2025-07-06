import { useState } from "react";
import { Codeinputbox } from "../component/DescinputBox";
import { Inputbox } from "../component/InputBox";
import { Button } from "../component/Button";
import { Bar } from "../component/Bar";
import { useNavigate } from "react-router-dom";

export const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUploading = () => {
    if (!title.trim()) return;

    setLoading(true);

    // ✅ Read current tasks safely
    const stored = localStorage.getItem("tasks");
    const currentTasks = stored ? JSON.parse(stored) : [];

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const updatedTasks = [...currentTasks, newTask];

    // ✅ Save updated tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // ✅ Clear input fields
    setTitle("");
    setDescription("");
    setLoading(false);

    // Optional: Show toast or success message here
    alert("✅ Task added successfully!");
    navigate("/tasks");
  };

  return (
    <div>
        <div>
            <Bar></Bar>
        </div>
    <div className="relative min-h-screen bg-gray-50">
      <div className="flex justify-center items-center w-full p-6 mt-12">
        <div className="w-full max-w-xl bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Add New Task</h2>

          {/* Title Input */}
          <div>
            <Inputbox
              label="Title Of The Task"
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description Input */}
          <div className="h-44 mt-5">
            <Codeinputbox
              label="Description (optional)"
              placeholder="Add a brief description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Upload Button */}
          <div className="mt-16 text-center">
            <Button
              onClick={handleUploading}
              label={loading ? "Uploading..." : "Upload Task"}
              className="mt-2"
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </div>
</div>
  );
};
