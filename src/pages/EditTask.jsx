import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Codeinputbox } from "../component/DescinputBox";
import { Inputbox } from "../component/InputBox";
import { Button } from "../component/Button";
import { Bar } from "../component/Bar";

export const EditTask = () => {
  const { id } = useParams(); // ✅ Get ID from URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Load the task on mount
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const taskToEdit = tasks.find((task) => task.id.toString() === id);

    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [id]);

  const handleUploading = () => {
    setLoading(true);

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === id) {
        return {
          ...task,
          title,
          description,
        };
      }
      return task;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setLoading(false);

    // Navigate back or to another page
    navigate("/"); // or navigate("/post/" + id);
  };

  return (
    <div className="relative min-h-screen">
        <div>
            <Bar />
        </div>
      <div className="relative min-h-screen grid-cols-1 lg:grid-cols-3 h-60 pb-3 mb-11 place-items-center lg:place-items-stretch">
        <div className="lg:col-span-2 flex flex-1 justify-center items-center w-full p-6 mt-12">
          <div className="w-full max-w-xl bg-white rounded-lg p-8 shadow-lg">
            <div>
              <Inputbox
                label={"Title Of The Task"}
                placeholder={"title...."}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="h-44 mt-5">
              <Codeinputbox
                label={"Description (optional)"}
                placeholder={"Add Description "}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-16">
              <Button
                onClick={handleUploading}
                label={loading ? "Uploading..." : "Update Task"}
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
