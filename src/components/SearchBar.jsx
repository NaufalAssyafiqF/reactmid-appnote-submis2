import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "react-router-dom";

const SearchBar = ({ setKeyword }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-center mb-20 w-[600px] mx-auto ">
      <input
        type="text"
        className=" bg-[#D9D9D9] py-3 px-2 rounded-l-lg w-[75%] border-2 border-black shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] me-0 focus:outline-none placeholder:text-[#6F6F6F] placeholder:font-ibmPlexMono placeholder:font-medium placeholder:text-base text-base font-ibmPlexMono font-medium"
        placeholder="Search Note by Title..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div
        className={` px-4 py-3 rounded-r-lg border-y-2 border-r-2 border-black shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] me-0 ${
          pathname === "/" ? "bg-[#8BD3DD]" : "bg-[#FAAE2B]"
        } `}
      >
        <p className="text-black font-ibmPlexMono font-medium">Search Note</p>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  setKeyword: PropTypes.func,
};

export default SearchBar;
