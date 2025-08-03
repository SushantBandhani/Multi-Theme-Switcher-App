import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";

function getFromLocalStorage<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (err) {
    console.error(`Could not load ${key} from localStorage:`, err);
    return fallback;
  }
}

const preLoadState = {
  cart: {
    data: getFromLocalStorage("cart", []),
  },
  mode: getFromLocalStorage("theme", "spring"),
};

export const store = configureStore({
  reducer: {
    mode: themeReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState: preLoadState,
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
