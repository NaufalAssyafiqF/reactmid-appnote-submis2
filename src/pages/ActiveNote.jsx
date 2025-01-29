import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CardNote from "../components/CardNote";
import AddButton from "../components/AddButton";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";

const ActiveNote = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQuery = (keyword) => {
    setSearchParams({ keyword });
  };

  useEffect(() => {
    const keyword = searchParams.get("keyword") || "";
    setKeyword(keyword);
  }, [searchParams]);

  useEffect(() => {
    if (!keyword) {
      setActiveNotes(getActiveNotes());
    }

    handleQuery(keyword);

    const searchNote = getActiveNotes().filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    setActiveNotes(searchNote);
  }, [keyword]);

  return (
    <div className="mx-20 mb-20">
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
