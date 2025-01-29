import React from "react";
import BtnNavigation from "./BtnNavigation";
import LineBar from "./LineBar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="w-full">
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
    </header>
  );
};

export default Header;
