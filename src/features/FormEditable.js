import { createSlice } from "@reduxjs/toolkit";

export const formEditable = createSlice({
  name: "formEditable",
  initialState: false,

  reducers: {
    IS_EDITABLE: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { IS_EDITABLE } = formEditable.actions;
export default formEditable.reducer;
