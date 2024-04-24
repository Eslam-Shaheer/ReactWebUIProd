import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "en",
};
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    togggleLanguage: (state) => {
      state.value = state.value == "ar" ? "en" : "ar";
    },
  },
});
export const { togggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
