import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/Login";
import productReducer from "./slice/Product";
import productDetailReducer from "./slice/ProductDetail";
import registerReducer from "./slice/Register";

const rootReducer = {
  products: productReducer,
  userLogin: loginReducer,
  userRegister: registerReducer,
  detail: productDetailReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
