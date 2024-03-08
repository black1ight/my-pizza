import { createSelector, createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/totalPrice";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size &&
          obj.board === action.payload.board
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size &&
          obj.board === action.payload.board
      );
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action) {
      const findId = state.items.findIndex(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );

      state.items.forEach((obj, index) => {
        if (index === findId) {
          state.items.splice(index, 1);
        }
      });
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
// export const selectCartItemById = (id) => (state) =>
//   state.cart.items.filter((obj) => obj.id === id);

const getCartItems = (state) => state.cart.items;

export const selectCartItemById = (id) =>
  createSelector(getCartItems, (items) => items.filter((obj) => obj.id === id));

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
