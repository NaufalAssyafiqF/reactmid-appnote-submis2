import React, { useContext } from "react";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import GlobalState from "../contexts/GlobalState";

const UserTopbar = ({ getData }) => {
  const {theme, themeHandler, languageHandler} = useContext(GlobalState);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <div className="flex items-center space-x-8 top-5 right-0 fixed mr-20 z-10">
      <div className="flex space-x-4 text-3xl">
        <div className="border-2 border-black p-1 rounded-lg cursor-pointer transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1] bg-[#d9d9d9]" onClick={languageHandler}>
          <IoLanguage />
        </div>
        <div
          className="border-2 border-black p-1 rounded-lg cursor-pointer transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 bg-[#d9d9d9]"
          onClick={themeHandler}
        >
          {theme === "light" ? (
            <MdOutlineLightMode />
          ) : (
            <MdOutlineNightlightRound />
          )}
        </div>
        <div
          className="border-2 border-black p-1 rounded-lg cursor-pointer transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 bg-[#d9d9d9]"
          onClick={handleLogout}
        >
          <IoMdExit />
        </div>
      </div>
      <div className="border-2 border-black py-1 px-2 rounded-lg item-cente flex items-center shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] bg-[#d9d9d9]">
        <p className="text-2xl font-bold font-comfortaa r">{getData?.name}</p>
      </div>
    </div>
  );
};

export default UserTopbar;
