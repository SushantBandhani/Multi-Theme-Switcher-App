import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";

export const store=configureStore({
    reducer:{
        mode:themeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType= typeof store.dispatch
