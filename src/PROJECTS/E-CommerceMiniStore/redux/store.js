import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
  },
});
