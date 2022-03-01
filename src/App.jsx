import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateNoteForm from "./components/CreateNote/CreateNoteForm";
import ViewNote from "./components/ViewNote/ViewNote";
import { useSelector } from "react-redux";

function App() {
  const programState = useSelector((state) => state.programState);
  return (
    <div className="page-content">
      <Sidebar />

      {programState.activeNote === null ? <CreateNoteForm /> : <ViewNote />}
    </div>
  );
}

export default App;
