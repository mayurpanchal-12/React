import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

const initialState = {
  history: getFromLocalStorage("orders") || [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.history.push(action.payload);
      saveToLocalStorage("orders", state.history);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
