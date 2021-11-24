import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../../api/product";

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (param) => {
    return await productApi.getProductID(param);
  }
);

const productSlice = createSlice({
  name: "productDetail",
  initialState: {
    data: [],
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProductDetail.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductDetail.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    },
    [getProductDetail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer: productDetailReducer } = productSlice;

export default productDetailReducer;
