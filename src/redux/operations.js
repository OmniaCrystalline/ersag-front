/** @format */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const URL = "https://ersagback.onrender.com"

axios.defaults.baseURL = URL;

export const addOrder = createAsyncThunk(
  "order/post",
  async (order, thunkAPI) => {
    try {
      const res = await axios.post("/order", order);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getGoods = createAsyncThunk("goods/get", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/products", _);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
