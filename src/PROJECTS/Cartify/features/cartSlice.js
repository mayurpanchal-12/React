import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find(item => item.id === action.payload.id);
      if(existing){
        existing.qty += 1;
      } else {
        state.cart.push({...action.payload, qty: 1});
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      // No alert on add
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      alert("Item removed from cart ❌");
    },
    incrementQty: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if(item){
        item.qty += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
        alert(`Increased quantity of ${item.name} ✅`);
      }
    },
    decrementQty: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if(item && item.qty > 1){
        item.qty -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
        alert(`Decreased quantity of ${item.name} 🔄`);
      } else if(item && item.qty === 1){
        state.cart = state.cart.filter(i => i.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart));
        alert(`${item.name} removed from cart ❌`);
      }
    }
  }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
