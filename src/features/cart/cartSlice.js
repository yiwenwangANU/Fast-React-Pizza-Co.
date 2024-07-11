import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem;
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.unitPrice;
      } else state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity += 1;
      item.totalPrice += item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity -= 1;
      item.totalPrice -= item.unitPrice;
      if (item.quantity <= 0) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// export const getTotalCartPrice = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalCartPrice = (store) =>
  store.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getTotalPizzaNumber = (store) =>
  store.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const getCart = (store) => store.cart.cart;

export const getPizzaNumberById = (pizzaId) => (store) => {
  return (
    store.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0
  );
};
export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
