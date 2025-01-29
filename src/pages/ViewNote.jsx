import React, { useState } from "react";
import { BiSolidArchiveIn, BiSolidArchiveOut } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import { showFormattedDate } from "../utils";
import Header from "../components/Header";

const ViewNote = () => {
  const { id } = useParams();
  const [getNoteByid, setGetNoteByid] = useState(getNote(id));
  const navigate = useNavigate();
  const textDate = showFormattedDate(getNoteByid.createdAt);

  const onDeleteHandler = () => {
    deleteNote(id);
    alert("Note Deleted Successfully");
    getNoteByid.archived ? navigate("/archive") : navigate("/");
  };

  const onChangeStatusHandler = () => {
    getNoteByid.archived ? unarchiveNote(id) : archiveNote(id);
    alert(
      `Note ${getNoteByid.archived ? "unarchived" : "archived"} Successfully`
    );
    getNoteByid.archived ? navigate("/archive") : navigate("/");
  };

  return (
    <div className="mx-20 mb-20">
      <Header />
      <div className="max-w-[90%] mx-auto h-fit flex flex-col items-start  rounded-lg">
        <div
          className={`flex items-center rounded-t-lg border-x-2 border-t-2 border-black  w-fit p-1 ${
            getNoteByid.archived ? "bg-[#FAAE2B]" : "bg-[#8BD3DD]"
          } `}
        >
          <p className="text-black font-comfortaa font-medium text-lg px-2 py-3">
            {getNoteByid.archived ? "Archived Note" : "Active Note"}
          </p>
        </div>
        <div
          className="w-full h-full bg-[#D9D9D9] rounded-lg border-2 border-black px-5 pt-4 pb-12 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)]"
          style={{ borderRadius: "0px 5px 5px 5px" }}
        >
          <h1 className="text-black font-ibmPlexMono font-medium text-4xl mb-2">
            {getNoteByid.title}
          </h1>
          <p className="text-black font-comfortaa font-medium text-lg mb-6">
            {textDate}
          </p>
          <p className="w-full h-full text-black text-2xl font-comfortaa font-medium ">
            {getNoteByid.body}
          </p>
          <div className="flex justify-end gap-x-10 mt-8 me-4">
            <div
              className={`flex items-center justify-end rounded lg p-2 border-2 border-black shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition duration-300 cursor-pointer ${
                getNoteByid.archived
                  ? "bg-[#8BD3DD] hover:bg-[#7aeffff3]"
                  : "bg-[#FAAE2B]  hover:bg-[#fadb2b]"
              } `}
              onClick={onChangeStatusHandler}
            >
              {getNoteByid.archived ? (
                <BiSolidArchiveOut className="text-4xl text-black" />
              ) : (
                <BiSolidArchiveIn className="text-4xl text-black" />
              )}
            </div>
            <div
              className="flex items-center justify-end bg-[#FFBDC4] rounded lg p-2 border-2 border-black shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition duration-300 cursor-pointer hover:bg-[#ff8389]"
              onClick={onDeleteHandler}
            >
              <MdDeleteForever className="text-4xl text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
