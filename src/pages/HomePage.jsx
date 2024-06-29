import React from "react";

import { Link } from "react-router-dom";
import DisplayItem from "../components/DisplayItem";
const HomePage = () => {
  return (
    <>
      <h1 className="text-center text-5xl sticky top-5 z-[50] text-[#FF6B00] font-bold tracking-wider ">
        Todo App
      </h1>
      <div className="h-[100vh] flex flex-col justify-center items-center gap-8 z-[-40]">
        <div className="mx-auto">
          <Link to="/addItem">
            <div className="text-9xl text-[#FFCF73] h-[100px] w-[100px] bg-black flex justify-center items-center pb-5 rounded-full ">
              <div>+</div>
            </div>
          </Link>
        </div>
        <DisplayItem />
      </div>
    </>
  );
};

export default HomePage;
