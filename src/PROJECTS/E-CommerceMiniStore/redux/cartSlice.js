import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

const initialState = {
  items: getFromLocalStorage("cart") || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, price } = action.payload;

      if (!id || !name || price === undefined || price === null) {
        console.warn("Invalid item payload:", action.payload);
        return;
      }

      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ id, name, price: Number(price), quantity: 1 });
      }

      saveToLocalStorage("cart", state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveToLocalStorage("cart", state.items);
    },
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      saveToLocalStorage("cart", state.items);
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      saveToLocalStorage("cart", state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage("cart", state.items);
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
