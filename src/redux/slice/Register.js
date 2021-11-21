import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/user";

export const createUser = createAsyncThunk(
  "create_user/createUser",
  async (params, thunkAPI) => {
    return await userApi.createUser(params);
  }
);

const registerSlice = createSlice({
  name: "create_user",
  initialState: {
    response: null,
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [createUser.pending]: (state, action) => {
      state.response = null;
      state.loading = true;
    },
    [createUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.response = payload;
      state.loading = false;
      state.error = null;
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer: registerReducer } = registerSlice;

export default registerReducer;
