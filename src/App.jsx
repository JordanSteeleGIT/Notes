import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateNoteForm from "./components/CreateNote/CreateNoteForm";

function App() {
  return (
    <div className="page-content">
      <Sidebar />
      <CreateNoteForm />
    </div>
  );
}

export default App;
