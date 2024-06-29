import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../store/todoSlice";

function EditTodo({ todo, setEditingId }) {
  const [taskName, setTaskName] = useState(todo.taskName);
  const [taskDescription, setTaskDescription] = useState(todo.taskDescription);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) {
      dispatch(editTodo({ id: todo.id, taskName, taskDescription }));
      setEditingId(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Edit task"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Edit description"
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Save
      </button>
      <button
        onClick={() => setEditingId(null)}
        className="ml-2 p-2 bg-gray-500 text-white rounded"
      >
        Cancel
      </button>
    </form>
  );
}

export default EditTodo;
