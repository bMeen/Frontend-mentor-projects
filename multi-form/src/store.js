import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./pages/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
