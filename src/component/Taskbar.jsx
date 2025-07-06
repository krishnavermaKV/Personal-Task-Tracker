

export const TaskBar = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value); // passes "all", "completed", or "pending"
  };

  return (
    <div className="p-4">
      <select
        onChange={handleChange}
        className="px-4 py-2 border rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};
