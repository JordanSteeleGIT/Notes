import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../features/notes";
import "./CreateNoteForm.css";
import { v4 as uuidv4 } from "uuid";

const CreateNoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const currentDate = new Date().getTime();
    const fullData = {
      uid: uuidv4(),
      created: currentDate,
      modified: currentDate,
      ...data,
    };
    console.log(fullData);
    dispatch(ADD_ITEM(fullData));
  };
  return (
    <div className="createnote-container">
      <h1>Create Note</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.title && <p>Title is required.</p>}
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Note"
            {...register("note", { required: true })}
          />

          {errors.note && <p>Note is required.</p>}
        </div>
        <div className="align-right">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CreateNoteForm;
