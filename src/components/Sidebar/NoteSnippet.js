import React from "react";

const NoteSnippet = ({ title, note }) => {
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
        <h1>Delete</h1>
      </div>
    </div>
  );
};

export default NoteSnippet;
