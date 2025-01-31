import React, { useEffect, useState } from "react";
import BtnNavigation from "./BtnNavigation";
import LineBar from "./LineBar";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserLogged } from "../utils/fetch-data";
import UserTopbar from "./UserTopbar";

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
      {getData && <UserTopbar getData={getData} />}
    </header>
  );
};

export default Header;
