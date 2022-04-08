import { createSlice } from "@reduxjs/toolkit";

export const activeNote = createSlice({
  name: "activeNote",
  initialState: { activeNote: false },

  reducers: {
    SET_ACTIVE_NOTE: (state, action) => {
      return { ...state, activeNote: action.payload };
    },
    DELETE_ACTIVE_NOTE: (state) => {
      return { activeNote: false };
    },
  },
});
export const { SET_ACTIVE_NOTE, DELETE_ACTIVE_NOTE } = activeNote.actions;
export default activeNote.reducer;
