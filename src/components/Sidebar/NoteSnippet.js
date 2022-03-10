import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE_ITEM } from "../../features/Notes";
import { SET_ACTIVE_NOTE } from "../../features/AppState";
import { useSelector } from "react-redux";

const NoteSnippet = ({ data }) => {
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

  useEffect(() => {
    console.log(programState.activeNote);
  });

  const DeleteTextToggle = () => {
    return (
      <div className="delete">
        <h1
          onClick={(e) => {
            e.stopPropagation();
            setDeleteConfirmationToggle(true);
          }}
        >
          Delete
        </h1>
      </div>
    );
  };

  const DeleteTextConfirmation = () => {
    return (
      <div className="delete-confirmation">
        <h1>Are you sure</h1>
        <div>
          <h1
            onClick={(e) => {
              e.stopPropagation();
              dispatch(DELETE_ITEM(data.uid));
              setDeleteConfirmationToggle(false);
            }}
          >
            Yes
          </h1>
          <h1>/</h1>
          <h1
            onClick={(e) => {
              e.stopPropagation();
              setDeleteConfirmationToggle(false);
            }}
          >
            No
          </h1>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="notesnippet"
        onClick={() => dispatch(SET_ACTIVE_NOTE(data))}
        style={{
          backgroundColor:
            data.uid === programState.activeNote.uid ? "#689af7" : "#E5E5E5",
        }}
      >
        <div className="noteinfo">
          <h1>{data.title}</h1>
          <h4>{shortenString(data.note)}</h4>
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
