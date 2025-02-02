import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BtnNavigation = ({ path, text }) => {
  return (
    <Link
      to={path}
      className={`px-6 py-3 ${
        path === "/"
          ? "bg-[#8BD3DD] hover:bg-[#7aeffff3]"
          : "bg-[#FAAE2B] hover:bg-[#fadb2b]"
      } text-black font-mono font-medium text-xl rounded-lg border-2 border-black  transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1`}
    >
      {text}
    </Link>
  );
};

BtnNavigation.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};

export default BtnNavigation;
