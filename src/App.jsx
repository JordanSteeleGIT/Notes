import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateNoteForm from "./components/CreateNote/CreateNoteForm";
import ViewNote from "./components/ViewNote/ViewNote";
import { useSelector } from "react-redux";

function App() {
  const activeNote = useSelector((state) => state.activeNote);

  return (
    <div className="page-content">
      <Sidebar />
      {activeNote.activeNote === false ? <CreateNoteForm /> : <ViewNote />}
    </div>
  );
}

export default App;
