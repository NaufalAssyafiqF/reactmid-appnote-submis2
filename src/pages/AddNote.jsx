import React, { useContext, useEffect, useState } from "react";
import { addNote, getUserLogged } from "../utils/fetch-data";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LineBar from "../components/LineBar";
import GlobalState from "../contexts/GlobalState";
import useInput from "../hooks/useInput";

const AddNote = () => {
  const [titleValue, titleValueHandler] = useInput("");
  const [bodyValue, bodyValueHandler] = useInput("");
  const { language } = useContext(GlobalState);

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newNote = { title: titleValue, body: bodyValue };
    addNote(newNote);
    navigate("/");
  };

  useEffect(() => {
    const checkLogin = async () => {
      const user = await getUserLogged();

      if (user.error) {
        alert("you are not logged in yet, please login first");
        return navigate("/login");
      }
    };

    checkLogin();
  }, []);

  return (
    <div className="mx-20 pb-20">
      <Header />
      <LineBar
        text={language === "en" ? "Add Note" : "Tambah Catatan"}
        bgColor="bg-[#8BD3DD]"
      />
      <div className="max-w-[90%] mx-auto h-fit flex flex-col items-start  rounded-lg">
        <div
          className={`flex items-center rounded-t-lg border-x-2 border-t-2 border-black  w-fit p-1 bg-[#8BD3DD] `}
        >
          <p className="text-black font-comfortaa font-medium text-lg px-2 py-3">
            {language === "en" ? "Add New Note" : "Tambah Catatan Baru"}
          </p>
        </div>
        <div
          className="w-full h-full bg-[#D9D9D9] rounded-lg border-2 border-black px-5 pt-4 pb-12 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)]"
          style={{ borderRadius: "0px 5px 5px 5px" }}
        >
          <form
            action=""
            className="w-[90%] mx-auto"
            onSubmit={onSubmitHandler}
          >
            <input
              type="text"
              className="w-full bg-[#D9D9D9] border-b-4 p-2 focus:outline-none placeholder:text-black placeholder:font-ibmPlexMono placeholder:font-medium placeholder:text-base text-base font-ibmPlexMono font-medium  border-black mt-10"
              placeholder={
                language === "en"
                  ? "Enter Your Title..."
                  : "Masukan Judul Catatan..."
              }
              onChange={titleValueHandler}
            />
            <textarea
              type="text"
              className="w-full h-12 bg-[#D9D9D9] border-b-4 p-2 focus:outline-none placeholder:text-black placeholder:font-ibmPlexMono placeholder:font-medium placeholder:text-base text-base font-ibmPlexMono font-medium  border-black mt-10"
              placeholder={
                language === "en"
                  ? "Enter Your Description..."
                  : "Masukan Deskripsi Catatan..."
              }
              onChange={bodyValueHandler}
            />
            <div className="flex justify-end mt-10">
              <button
                type="submit"
                className="text-black text-2xl px-6 py-3 bg-[#8BD3DD] hover:bg-[#7aeffff3] font-mono font-medium rounded-lg border-2 border-black  transition duration-300 shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                {language === "en" ? "Save Note" : "Simpan Catatan"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
