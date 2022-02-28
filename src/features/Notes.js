import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    value: [
      {
        uid: "d793e81b-3394-472c-a23c-6fb9885b8469",
        created: 1646059252654,
        modified: 1646059252654,
        title: "sd",
        note: "sd",
      },
    ],
  },
  reducers: {
    ADD_ITEM: (state, action) => {
      return { ...state, value: [...state.value, action.payload] };
    },
    DELETE_ITEM: (state, action) => ({
      ...state,
      value: state.value.filter((item) => item.uid !== action.payload),
    }),
  },
});
export const { ADD_ITEM, DELETE_ITEM } = notesSlice.actions;
export default notesSlice.reducer;
