import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_ITEM } from "../../features/notes";

const NoteSnippet = ({ title, note, id }) => {
  const dispatch = useDispatch();

  function shortenString(word) {
    if (word.length < 90) {
      return word.substr(0, 90);
    } else {
      return word.substr(0, 90) + " ...";
    }
  }
  return (
    <div className="notesnippet">
      <div className="noteinfo">
        <h1>{title}</h1>
        <h4>{shortenString(note)}</h4>
      </div>
      <div className="delete">
        <h1 onClick={() => dispatch(DELETE_ITEM(id))}>Delete</h1>
      </div>
    </div>
  );
};

export default NoteSnippet;
