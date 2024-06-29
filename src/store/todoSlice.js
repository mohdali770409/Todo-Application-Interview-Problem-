import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), ...action.payload, completed: false });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem("todos", JSON.stringify(state));
    },
    editTodo: (state, action) => {
      const { id, taskName, taskDescription } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.taskName = taskName;
        todo.taskDescription = taskDescription;
      }
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
