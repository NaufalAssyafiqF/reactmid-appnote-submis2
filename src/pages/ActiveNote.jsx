import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CardNote from "../components/CardNote";
import AddButton from "../components/AddButton";
// import { getActiveNotes } from "../utils/local-data";
import { getActiveNotes } from "../utils/fetch-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";

const ActiveNote = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleQuery = (keyword) => {
    setSearchParams({ keyword });
  };

  useEffect(() => {
    const keyword = searchParams.get("keyword") || "";
    setKeyword(keyword);
  }, [searchParams]);

  useEffect(() => {
    const getNoteData = async () => {
      const getFetch = await getActiveNotes();

      if (getFetch.error) {
        alert("you are not logged in yet, please login first");
        return navigate("/login");
      }

      setActiveNotes(getFetch.data); // Ambil data awal hanya sekali
    };

    getNoteData();
  }, []);

  useEffect(() => {
    const filterNotes = async () => {
      const getFetch = await getActiveNotes(); // Ambil data dari fungsi getActiveNotes
      const searchNote = getFetch.data.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setActiveNotes(searchNote); // Update state dengan hasil filter
    };

    handleQuery(keyword);
    filterNotes();
  }, [keyword]);

  return (
    <div className="mx-20 pb-20">
      <Header />
      <SearchBar setKeyword={setKeyword} />
      <div className="flex flex-wrap gap-x-8 gap-y-8">
        {activeNotes.map((note) => (
          <CardNote key={note.id} note={note} />
        ))}
      </div>
      {!activeNotes.length && (
        <p className="text-center w-full font-ibmPlexMono font-medium">
          No Note Found
        </p>
      )}
      <AddButton />
    </div>
  );
};

export default ActiveNote;
