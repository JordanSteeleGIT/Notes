import { createSlice } from "@reduxjs/toolkit";

export const programState = createSlice({
  name: "programState",
  initialState: { activeNote: null },

  reducers: {
    SET_ACTIVE_NOTE: (state, action) => {
      return { ...state, activeNote: action.payload };
    },
  },
});
export const { SET_ACTIVE_NOTE } = programState.actions;
export default programState.reducer;
