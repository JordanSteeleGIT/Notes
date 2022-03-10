import { configureStore, combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./features/Notes";
import programState from "./features/AppState";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  notes: notesReducer,
  programState: programState,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
