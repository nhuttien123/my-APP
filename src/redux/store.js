import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slice/Login";
import productReducer from "./Slice/Product";
import registerReducer from "./Slice/Register";

const rootReducer = {
  products: productReducer,
  userLogin: loginReducer,
  userRegister: registerReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
