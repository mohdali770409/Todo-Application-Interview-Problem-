import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
const AddList = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) {
      dispatch(addTodo({ taskName, taskDescription }));
      setTaskName("");
      setTaskDescription("");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[100vh]  ">
        <form
          className="flex flex-col max-w-[1080px]  gap-2 "
          onSubmit={submitHandler}
        >
          <div>
            <h1 className="text-lg font-semibold">Task Name</h1>
            <input
              className="border-2 py-2 px-6 sm:px-7 md:px-6 border-[#FFCF73]"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter Task..."
              required
            />
          </div>
          <div>
            {" "}
            <h1 className="text-lg font-semibold">Task Description</h1>
            <textarea
              rows={4}
              cols={26}
              className="border-2 py-2 px-4 border-[#FFCF73]  "
              type="text"
              value={taskDescription}
              placeholder="Enter Description.... "
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className=" bg-[#FFCF73] text-white py-2 rounded-xl font-bold text-xl"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddList;
