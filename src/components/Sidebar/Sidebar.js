import React from "react";
import { useSelector } from "react-redux";
import NoteSnippet from "./NoteSnippet";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_NOTE } from "../../features/AppState";

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.notes.value);
  return (
    <div className="sidebar">
      <div className="upper-sidebar">
        <h1>Notes</h1>
        <h4 onClick={() => dispatch(SET_ACTIVE_NOTE(null))}>Add</h4>
      </div>
      <div className="search">
        <div>
          <input placeholder="Search"></input>
        </div>
        <div className="sort">Sort by /logo/ </div>
      </div>
      <div className="notes">
        {user.map((data, i) => {
          return (
            <NoteSnippet title={data.title} note={data.note} id={data.uid} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
