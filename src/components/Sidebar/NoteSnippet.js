import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE_ITEM } from "../../features/Notes";
import { SET_ACTIVE_NOTE } from "../../features/AppState";
import { useSelector } from "react-redux";

const NoteSnippet = ({ title, note, id }) => {
  const dispatch = useDispatch();
  const programState = useSelector((state) => state.programState);
  const [deleteConfirmationToggle, setDeleteConfirmationToggle] = useState(
    false
  );

  function shortenString(word) {
    if (word.length < 90) {
      return word.substr(0, 90);
    } else {
      return word.substr(0, 90) + " ...";
    }
  }

  const DeleteTextToggle = () => {
    return (
      <div className="delete">
        <h1 onClick={() => setDeleteConfirmationToggle(true)}>Delete</h1>
      </div>
    );
  };

  const DeleteTextConfirmation = () => {
    return (
      <div className="delete-confirmation">
        <h1>Are you sure</h1>
        <div>
          <h1
            onClick={() => {
              dispatch(DELETE_ITEM(id));
              setDeleteConfirmationToggle(false);
            }}
          >
            Yes
          </h1>
          <h1>/</h1>
          <h1 onClick={() => setDeleteConfirmationToggle(false)}>No</h1>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="notesnippet"
        style={{
          backgroundColor:
            id == programState.activeNote ? "#689af7" : "#E5E5E5",
        }}
      >
        <div className="noteinfo" onClick={() => dispatch(SET_ACTIVE_NOTE(id))}>
          <h1>{title}</h1>
          <h4>{shortenString(note)}</h4>
        </div>
        {deleteConfirmationToggle === false ? (
          <DeleteTextToggle />
        ) : (
          <DeleteTextConfirmation />
        )}
      </div>
    </>
  );
};

export default NoteSnippet;
