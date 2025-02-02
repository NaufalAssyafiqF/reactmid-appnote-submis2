import React, { useContext, useEffect, useState } from "react";
import BtnNavigation from "./BtnNavigation";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserLogged } from "../utils/fetch-data";
import UserTopbar from "./UserTopbar";
import GlobalState from "../contexts/GlobalState";

const Header = () => {
  const { pathname } = useLocation();
  const [getData, setGetData] = useState();
  const { theme, language } = useContext(GlobalState);

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
        <img src="/images/note-logo.png" alt="" className="w-[232px]" />
        <h1
          className={`font-comfortaa text-5xl mb-4 ${
            theme === "light" ? "text-[#6f6f6f]" : "text-[#d9d9d9]"
          }  transition duration-300`}
        >
          {language === "en" ? "My Notes" : "Catan Saya"}
        </h1>
        <h2
          className={`font-comfortaa text-5xl ${
            theme === "light" ? "text-black" : "text-[#ffffff]"
          } transition duration-300`}
        >
          {language === "en" ? "Smart Notes" : "Catatan pintar"}, <br />
          {language === "en"
            ? "High Productivity."
            : "Tingkatkan Produktifitas"}
        </h2>
        {pathname !== "/login" && pathname !== "/register" ? (
          <div className="flex gap-x-10 mt-8 font-ibmPlexMono">
            <BtnNavigation
              path="/"
              text={language === "en" ? "Active Note" : "Catatan Aktif"}
            />
            <BtnNavigation
              path="/archive"
              text={language === "en" ? "Archive Note" : "Catatan arsip"}
            />
          </div>
        ) : null}
      </div>
      {getData && <UserTopbar getData={getData} />}
    </header>
  );
};

export default Header;
