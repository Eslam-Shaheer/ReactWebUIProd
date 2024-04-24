import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import languageReducer from "./slices/languageSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
    products: productsReducer,
  },
});
