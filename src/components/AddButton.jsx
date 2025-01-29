import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div className="flex flex-col items-end mt-10">
      <Link
        to="/add"
        className="bg-[#FFBDC4] w-16 h-16 rounded-full flex items-center justify-center shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition duration-300 cursor-pointer hover:bg-[#ff8389]"
      >
        <IoMdAdd className="text-5xl" />
      </Link>
    </div>
  );
};

export default AddButton;
