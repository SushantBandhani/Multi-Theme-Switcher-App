import { createSlice } from "@reduxjs/toolkit";

// Redux slice to manage theme
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
