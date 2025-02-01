import React, { useState } from "react";
import ActiveNote from "./pages/ActiveNote";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import AddNote from "./pages/AddNote";
import ViewNote from "./pages/ViewNote";
import ArchiveNote from "./pages/ArchiveNote";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const themeHandler = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
