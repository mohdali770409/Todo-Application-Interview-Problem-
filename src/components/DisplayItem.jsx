import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditTodo from "./EditTodo";
const DisplayItem = () => {
  const todos = useSelector((state) => state.todos);
  const [editingId, setEditingId] = useState(null);
  return (
    <ul>
      {todos.map((todo) =>
        editingId === todo.id ? (
          <EditTodo key={todo.id} todo={todo} setEditingId={setEditingId} />
        ) : (
          <TodoItem key={todo.id} todo={todo} setEditingId={setEditingId} />
        )
      )}
    </ul>
  );
};

export default DisplayItem;
