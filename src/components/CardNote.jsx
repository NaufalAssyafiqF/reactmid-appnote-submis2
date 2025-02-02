import React from "react";
import { Link, useLocation } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

const CardNote = ({ note }) => {
  const { pathname } = useLocation();
  const textDate = showFormattedDate(note.createdAt);
  
  return (
    <Link
      to={`/view/${note.id}`}
      className="w-[340px] h-fit flex flex-col items-end shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] rounded-lg hover:scale-105 transition duration-300 overflow-hidden"
    >
      <div
        className={`flex items-center justify-end  rounded-t-lg border-x-2 border-t-2 border-black  w-fit p-1 ${
          pathname === "/" ? "bg-[#8BD3DD]" : "bg-[#FAAE2B]"
        } `}
      >
        <p className="text-black font-comfortaa font-medium text-xs">
          {textDate}
        </p>
      </div>
      <div
        className="w-full h-full bg-[#D9D9D9] rounded-lg border-2 border-black px-3 pt-2 pb-8"
        style={{ borderRadius: "5px 0 5px 5px" }}
      >
        <h1 className="text-black font-ibmPlexMono font-medium text-2xl mb-2">
          {note.title}
        </h1>
        <p className="w-full h-full text-black font-comfortaa font-medium text-base overflow-hidden line-clamp-[6] text-ellipsis">
          {note.body}
        </p>
      </div>
    </Link>
  );
};

CardNote.propTypes = {
  note: PropTypes.object,
};

export default CardNote;
