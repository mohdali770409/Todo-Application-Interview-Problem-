import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/todoSlice";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const TodoItem = ({ todo, setEditingId }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={`flex justify-between items-center p-2 border-b bg-[#F3F3F3] m-3 
      }`}
    >
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        <div>
          <input type="checkbox" checked={todo.completed} className="mr-2" />
          <span
            className={`font-bold ${
              todo.completed ? "line-through decoration-[#FFCF73]" : ""
            } `}
          >
            {todo.taskName}
          </span>
        </div>
        <p className={`text-sm ${todo.completed ? "line-through decoration-[#FFCF73]" : ""}`}>
          {todo.taskDescription}
        </p>
      </div>
      <button
        onClick={() => setEditingId(todo.id)}
        className="ml-4 p-2 bg-yellow-500 text-white rounded"
      >
        <FaRegEdit />
      </button>

      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="ml-4 p-2 bg-red-500 text-white rounded"
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default TodoItem;
