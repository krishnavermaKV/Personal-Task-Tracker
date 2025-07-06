import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "../component/Bar";
import { Button } from "../component/Button";
import { Inputbox } from "../component/InputBox";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Username is required");
      return;
    }

    localStorage.setItem("username", username.trim());
    alert(`✅ Welcome, ${username}!`);

    // Optionally redirect after login
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="w-full fixed top-0 left-0 z-50">
        <Bar />
      </div>

      {/* Login Form - Centered on all screen sizes */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-xl bg-white rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Login to Your Task Tracker
          </h1>

          {/* Username Input */}
          <Inputbox
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            placeholder="e.g. johndoe123"
            value={username}
          />

          {/* Login Button */}
          <div className="mt-6 text-center">
            <Button label="Login" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};
