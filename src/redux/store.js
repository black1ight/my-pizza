import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filter from "./slices/filterSlice";
import pizza from "./slices/pizzaSlise";
import cart from "./slices/cartSlice";
import user from "./slices/userSlice";

const rootReducer = combineReducers({
  filter,
  pizza,
  cart,
  user,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
