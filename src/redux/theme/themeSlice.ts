import { createSlice } from "@reduxjs/toolkit";
const storedTheme = localStorage.getItem("theme");

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: storedTheme ? storedTheme : "spring",
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
