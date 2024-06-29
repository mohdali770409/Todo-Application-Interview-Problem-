import React from "react";
import AddList from "../components/AddList";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AddItem = () => {
  return (
    <div className="relative">
      <Link to="/">
        <div className="absolute top-5 left-5 text-blue-800 font-extrabold">
          {" "}
          <FaArrowLeft className="inline mr-2 mb-1 " />
          Go back
        </div>
      </Link>
      <h1 className="text-center pt-5 text-5xl text-[#FF6B00] font-bold tracking-wider">
        Add Your Task
      </h1>
      <AddList />
    </div>
  );
};

export default AddItem;
