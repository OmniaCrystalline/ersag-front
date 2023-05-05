/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { addOrder, getGoods } from "./operations";
import {
  handlePending,
  setGoods,
  handleResolveOrder,
  handleReject,
} from "./handlers";

const initialState = {
  goods: [],
  isLoading: false,
  isRejected: false,
  likes: [],
  basket: [],
  orders: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    likesSwitcher(state, action) {
      const inList = state.likes.includes(action.payload);
      inList
        ? (state.likes = state.likes.filter((e) => e !== action.payload))
        : state.likes.push(action.payload);
    },
    basketSwitcher(state, action) {
      const inList =
        state.basket.findIndex((e) => e._id === action.payload._id) !== -1;
      if (!inList) action.payload = { ...action.payload, quantity: 1 };
      inList
        ? (state.basket = state.basket.filter(
            (e) => e._id !== action.payload._id
          ))
        : state.basket.push(action.payload);
    },
    setOrder(state, action) {},

    changeQuantity(state, action) {
      console.log("changeQuantity");
      if (action.payload[1] === "") return;
      const index = state.basket.findIndex((e) => e._id === action.payload[0]);
      if (index === -1) return;
      state.basket[index].quantity = Number(action.payload[1]);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.fulfilled, handleResolveOrder)
      .addCase(addOrder.pending, handlePending)
      .addCase(getGoods.fulfilled, setGoods)
      .addCase(getGoods.pending, handlePending)
      .addCase(addOrder.rejected, handleReject);
  },
});

export const {
  likesSwitcher,
  basketSwitcher,
  setBasketGoods,
  changeQuantity,
  setOrder,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
