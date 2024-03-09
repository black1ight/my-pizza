import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizza",
  async (params) => {
    const { category, arrow, search, sortList, sortType, id } = params;
    const { data } = await axios.get(
      `https://63f67ab959c944921f74dd84.mockapi.io/pizza?${category}&sortBy=${sortList[sortType]}&${arrow}&${search}&${id}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "",
  activePizzaId: null,
  activeItem: [],
  openPopup: false,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setActiveItem(state, action) {
      state.activeItem = action.payload;
    },
    setActivePizzaId(state, action) {
      state.activePizzaId = action.payload;
    },
    setOpenPopup(state, action) {
      state.openPopup = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems, setActivePizzaId, setActiveItem, setOpenPopup } =
  pizzaSlice.actions;

export default pizzaSlice.reducer;
