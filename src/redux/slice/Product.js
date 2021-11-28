import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/product";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async ({ name, page, sort }) => {
    return await productApi.getProduct({ name, page, sort });
  }
);

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
    [getProduct.fulfilled]: (state, { payload }) => {
      state.data = payload;
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
