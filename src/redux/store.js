import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/Product";

const rootReducer = {
  products: productReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
