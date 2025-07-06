import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ShowTask } from "./pages/ShowTask";
import { EditTask } from "./pages/EditTask";
import { Home } from "./pages/Home";
import { AddTask } from "./pages/AddTask";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Redirect default route to /signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<ShowTask />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
