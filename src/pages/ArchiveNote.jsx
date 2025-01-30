import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CardNote from "../components/CardNote";
import AddButton from "../components/AddButton";
import { getArchivedNotes } from "../utils/fetch-data";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";

const ArchiveNote = () => {
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
    const getNoteData = async () => {
      const getFetch = await getArchivedNotes();
      setActiveNotes(getFetch.data); // Ambil data awal hanya sekali
    };

    getNoteData();
  }, []);

  useEffect(() => {
    const filterNotes = async () => {
      const getFetch = await getArchivedNotes(); // Ambil data dari fungsi getActiveNotes
      const searchNote = getFetch.data.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setActiveNotes(searchNote); // Update state dengan hasil filter
    };

    handleQuery(keyword);
    filterNotes();
  }, [keyword]);

  return (
    <div className="mx-20 mb-20">
      <Header />
      <SearchBar setKeyword={setKeyword} />
      <div className="flex flex-wrap gap-x-8 gap-y-8">
        {activeNotes.map((note) => (
          <CardNote key={note.id} note={note} />
        ))}
        {!activeNotes.length && (
          <p className="text-center w-full font-ibmPlexMono font-medium">
            No Note Found
          </p>
        )}
      </div>
      <AddButton />
    </div>
  );
};

export default ArchiveNote;
