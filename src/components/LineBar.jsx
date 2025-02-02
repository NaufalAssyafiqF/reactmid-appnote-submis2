import React from "react";
import PropTypes from "prop-types";

const LineBar = ({ text, bgColor }) => {
  return (
    <div className="mt-20 mb-10 z-1">
      <p
        className={`max-w-[170px] py-3 text-center font-medium text-lg  text-black font-ibmPlexMono rounded-t-lg border-x-2 border-t-2 border-black ${bgColor}`}
      >
        {text}
      </p>
      <hr className=" border-2 border-black rounded-full" />
    </div>
  );
};

LineBar.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
};

export default LineBar;
