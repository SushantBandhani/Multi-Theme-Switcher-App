import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch the product list from the API
export const fetchProducts = createAsyncThunk(
  "posts/fetchProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  },
);

export type Status = "idle" | "loading" | "succeeded" | "failed";

interface Product {
  id: number;
  thumbnail: string;
  brand: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  title: string;
  weight: number;
  quantity: number;
}

interface ProductApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface ProductSliceType {
  data: ProductApiResponse | null;
  status: Status;
  error: string | null;
}

const initialState: ProductSliceType = {
  data: null,
  status: "idle",
  error: null,
};

// Handles product slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  // Handles product fetching states: pending, fulfilled, rejected
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default productSlice.reducer;
