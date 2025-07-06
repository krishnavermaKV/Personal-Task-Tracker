import { useState, useEffect } from "react";
import { Boxes } from "../component/Boxes";
import { Bar } from "../component/Bar";
import { TaskBar } from "../component/Taskbar";

export const ShowTask = () => {
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("all");

  const refreshTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTask(tasks);
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  // ✅ Filter the tasks based on selected option
  const filteredTasks = task.filter((t) => {
    if (filter === "completed") return t.completed === true;
    if (filter === "pending") return t.completed === false;
    return true; // "all"
  });

  return (
    <div>
      <Bar />
      <TaskBar onFilterChange={setFilter} />
      
      <div className="grid gap-4 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map((item) => (
          <Boxes
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            completed={item.completed}
            createdAt={item.createdAt}
            refreshTasks={refreshTasks}
          />
        ))}
      </div>
    </div>
  );
};
