// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
// const { createAsyncThunk } = require("@reduxjs/toolkit");
import { createAsyncThunk } from "@reduxjs/toolkit";
// const axios = require("axios");
import axios from "axios";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export const fetchCloths = createAsyncThunk(
  "cloth/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://thia-backend.onrender.com/api/Cloths"
      );
      return response.data;
    } catch (error) {
      console.log("Message:", error.message);
      return rejectWithValue(error.message);
    }
    
  }
);

const clothSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchCloths.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCloths.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(fetchCloths.rejected, (state, action) => {
      state.data = [];
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const clothReducers = clothSlice.reducer;
export const clothActions = clothSlice.actions;

