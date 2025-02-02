import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CardNote from "../components/CardNote";
import AddButton from "../components/AddButton";
import { getArchivedNotes } from "../utils/fetch-data";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import LineBar from "../components/LineBar";
import GlobalState from "../contexts/GlobalState";

const ArchiveNote = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const {language} = useContext(GlobalState)

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
      setIsLoading(true)
      const getFetch = await getArchivedNotes();
      setIsLoading(false)

      if (getFetch.error) {
        alert("you are not logged in yet, please login first");
        return navigate("/login");
      }

      setActiveNotes(getFetch.data); 
    };

    getNoteData();
  }, []);

  useEffect(() => {
    const filterNotes = async () => {
      isLoading(false)
      const getFetch = await getArchivedNotes(); 
      const searchNote = getFetch.data.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setActiveNotes(searchNote); 
    };

    handleQuery(keyword);
    filterNotes();
  }, [keyword]);

  return (
    <div className="mx-20 pb-20">
      <Header />
      <LineBar text={language === "en" ? "Archive Notes" : "Catatan Arsip"} bgColor="bg-[#FAAE2B]" />
      <SearchBar setKeyword={setKeyword} />
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
      <AddButton />
    </div>
  );
};

export default ArchiveNote;
