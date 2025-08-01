import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'
export const store=configureStore({
    reducer:{
        mode:themeReducer,
        products:productsReducer,
        cart:cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType= typeof store.dispatch
