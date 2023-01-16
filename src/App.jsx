import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Notes";
import CreateNewNote from "./CreateNewNote";
import ModifyNote from "./ModifyNote";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <body id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />}></Route>
          <Route
            path="/create-new-note"
            element={<CreateNewNote setNotes={setNotes} />}
          ></Route>
          <Route
            path="/modify-note/:id"
            element={<ModifyNote notes={notes} setNotes={setNotes} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </body>
  );
};

export default App;
