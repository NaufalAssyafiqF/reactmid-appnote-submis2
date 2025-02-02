import React, { useEffect, useState } from "react";
import ActiveNote from "./pages/ActiveNote";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import AddNote from "./pages/AddNote";
import ViewNote from "./pages/ViewNote";
import ArchiveNote from "./pages/ArchiveNote";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GlobalState from "./contexts/GlobalState";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const themeHandler = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  const languageHandler = () => {
    setLanguage((prev) => (prev == "en" ? "id" : "en"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <GlobalState.Provider value={{ theme, themeHandler, language, languageHandler }}>
      <main className={theme === "light" ? "bg-light" : "bg-dark"}>
        <Routes>
          <Route path="/" element={<ActiveNote />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/view/:id" element={<ViewNote />} />
          <Route path="/archive" element={<ArchiveNote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </GlobalState.Provider>
  );
}

export default App;
