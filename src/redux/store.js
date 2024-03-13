import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import pizza from "./slices/pizzaSlise";
import cart from "./slices/cartSlice";
import user from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    filter,
    pizza,
    cart,
    user,
  },
});
