import { configureStore, combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./features/Notes";
import activeNote from "./features/ActiveNote";
import formEditable from "./features/FormEditable";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  notes: notesReducer,
  activeNote: activeNote,
  formEditable: formEditable,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["notes"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
