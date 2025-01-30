import React, { useEffect, useState } from "react";
import BtnNavigation from "./BtnNavigation";
import LineBar from "./LineBar";
import { useLocation } from "react-router-dom";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { getUserLogged } from "../utils/fetch-data";

const Header = () => {
  const { pathname } = useLocation();
  const [getData, setGetData] = useState();

  useEffect(() => {
    const getUserData = async () => {
      const getFetch = await getUserLogged();
      setGetData(getFetch.data);
    };

    getUserData();
  }, []);

  return (
    <header className="w-full relative">
      <div className="flex flex-col items-center justify-center text-center">
        <img src="/images/note-image.webp" alt="" className="w-[232px]" />
        <h1 className="font-comfortaa text-5xl text-[#6f6f6f] mb-4">
          My Noteapp
        </h1>
        <h2 className="font-comfortaa text-5xl text-black">
          Smart Notes, <br />
          High Productivity.
        </h2>
        {pathname !== "/login" && pathname !== "/register" ? (
          <div className="flex gap-x-10 mt-8 font-ibmPlexMono">
            <BtnNavigation path="/" text="Active Note" />
            <BtnNavigation path="/archive" text="Archive Note" />
          </div>
        ) : null}
      </div>
      <LineBar />
      <div className="flex items-center space-x-8 top-5 right-0 fixed mr-20 z-10">
        <div className="flex space-x-4 text-3xl">
          <div className="border-2 border-black p-1 rounded-lg cursor-pointer transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            <IoLanguage />
          </div>
          <div className="border-2 border-black p-1 rounded-lg cursor-pointer transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            <MdOutlineLightMode />
          </div>
          <div className="border-2 border-black p-1 rounded-lg cursor-pointer transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            <IoMdExit />
          </div>
        </div>
        <div className="border-2 border-black py-1 px-2 rounded-lg item-cente flex items-center shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] ">
          <p className="text-2xl font-bold font-comfortaa r">{getData?.name}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
