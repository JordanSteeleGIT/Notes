import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { UPDATE_ITEM } from "../../features/Notes";
import { useDispatch } from "react-redux";
import { IS_EDITABLE } from "../../features/FormEditable";
import "./ViewNote.css";

const ViewNote = () => {
  const activeNote = useSelector((state) => state.activeNote);
  const isEditable = useSelector((state) => state.formEditable);
  const [newNoteData, setNewNoteData] = useState({
    ...activeNote.activeNote,
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newNoteData,
    },
  });

  useEffect(() => {
    reset(newNoteData);
  }, [newNoteData]);

  useEffect(() => {
    setNewNoteData({ ...activeNote.activeNote });
  }, [activeNote.activeNote]);

  useEffect(() => {
    dispatch(UPDATE_ITEM(newNoteData));
  }, [newNoteData]);

  const onSubmit = (data) => {
    dispatch(IS_EDITABLE(false));
    setNewNoteData((prev) => ({
      ...prev,
      title: data.title,
      note: data.note,
    }));
  };

  return (
    <>
      <div className="viewnote-container">
        <div className="viewnote-header">
          <h1>View Note</h1>
          <h4 onClick={() => dispatch(IS_EDITABLE(true))}>Edit</h4>
        </div>
        <div className="viewnote-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                style={{ border: isEditable ? "2px solid #c1c1c1" : "none" }}
                type="text"
                placeholder="Title"
                {...register("title", {
                  required: true,
                  maxLength: 15,
                })}
                readOnly={!isEditable}
              />

              {errors.title && errors.title.type === "required" && (
                <p>Title is required.</p>
              )}
              {errors.title && errors.title.type === "maxLength" && (
                <p>Title too long.</p>
              )}
            </div>
            <div>
              <textarea
                style={{ border: isEditable ? "2px solid #c1c1c1" : "none" }}
                type="text"
                placeholder="Note"
                {...register("note", {
                  required: true,
                })}
                readOnly={!isEditable}
              />

              {errors.note && <p>Note is required.</p>}
            </div>
            {isEditable && (
              <div className="edit-buttons">
                <button
                  onClick={() =>
                    setNewNoteData({
                      ...activeNote.activeNote,
                    })
                  }
                >
                  Discard
                </button>

                <input type="submit" />
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewNote;
