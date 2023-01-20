// LIBRARIES
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

// REDUX
import projectSlice from "slices/projectsSlice";
import statisticsSlice from "slices/statisticsSlice";
import personSlice from "slices/personsSlice";

const reducers = combineReducers({
  project: projectSlice,
  statistics: statisticsSlice,
  person: personSlice,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
