import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/user";

export const getUser = createAsyncThunk("user/getUser", async (parms) => {
  return await userApi.getUser(parms);
});

const loginSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.data = [];
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer: loginReducer } = loginSlice;

export default loginReducer;
