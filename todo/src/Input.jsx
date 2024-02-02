import React from "react";
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";

const Input = () => {
  return (
    <div>
      <div className="bg-blue-400 h-11 w-4/5  mx-20 rounded-xl shadow-lg flex justify-around items-center mb-8">
        {" "}
        <div className=" rounded-xl hover:cursor-pointer">
          <input
            type="checkbox"
           
          />
        </div>
        <h3 className="w-3/5 flex text-xl text-white font-semibold">
          Go to collge
        </h3>
        <div className="flex items-center justify-between space-x-3">
          <button className="text-white text-md font-bold rounded-xl ">
            <MdDelete className="h-[40px] w-[30px]" />
          </button>
          <button className="text-white text-md font-bold rounded-xl">
            <MdUpdate className="h-[40px] w-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
