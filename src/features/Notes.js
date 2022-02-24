import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    value: [
      {
        id: "1",
        title: "Title 1",
        note:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      },
      {
        id: "2",
        title: "Title 2",
        note:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
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
