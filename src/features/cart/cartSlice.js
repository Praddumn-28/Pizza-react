import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new Item
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      // payload = id of the item (pizzaId)

      state.cart = state.cart.filter(function (citem) {
        return citem.pizzaId !== action.payload;
      });
    },

    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find(function (citem) {
        return citem.pizzaId === action.payload;
      });
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseItemQuantity(state, action) {
      //  payload = pizzaId

      const item = state.cart.find(function (citem) {
        return citem.pizzaId === action.payload;
      });

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
