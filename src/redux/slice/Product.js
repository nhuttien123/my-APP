import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/product";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  return await productApi.getProduct();
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.data = [action.payload];
      state.loading = false;
      state.error = null;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer: productReducer } = productSlice;

export default productReducer;
