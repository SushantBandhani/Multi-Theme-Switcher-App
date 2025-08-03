import { createSlice } from "@reduxjs/toolkit";
// const storedTheme = localStorage.getItem("theme");

export const themeSlice = createSlice({
  name: "theme",
  initialState: "spring",
  reducers: {
    toggleTheme: (_, action) => {
      return action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
