import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import GlobalState from "../contexts/GlobalState";

const SearchBar = ({ setKeyword }) => {
  const { pathname } = useLocation();
  const { language } = useContext(GlobalState);

  return (
    <div className="flex items-center justify-center mb-20 w-[600px] mx-auto ">
      <input
        type="text"
        className=" bg-[#D9D9D9] py-3 px-2 rounded-l-lg w-[75%] border-2 border-black shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] me-0 focus:outline-none placeholder:text-[#6F6F6F] placeholder:font-ibmPlexMono placeholder:font-medium placeholder:text-base text-base font-ibmPlexMono font-medium"
        placeholder={
          language === "en"
            ? "Search Note by Title..."
            : "Cari Catatan berdasarkan judul..."
        }
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div
        className={` px-4 py-3 rounded-r-lg border-y-2 border-r-2 border-black shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] me-0 ${
          pathname === "/" ? "bg-[#8BD3DD]" : "bg-[#FAAE2B]"
        } `}
      >
        <p className="text-black font-ibmPlexMono font-medium">
          {language === "en" ? "Search Note" : "Cari Catatan"}
        </p>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  setKeyword: PropTypes.func,
};

export default SearchBar;
