import React from "react";
import { useSelector } from "react-redux";

const ViewNote = () => {
  const programState = useSelector((state) => state.programState);
  return <div>{programState.activeNote.note}</div>;
};

export default ViewNote;
