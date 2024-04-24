import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/axiosInstance";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (productID, thunkAPI) => {
    // const {language}=thunkAPI.getState()

    try {
      const response = await axiosInstance.get(`/products`);

      //   throw new Error("Unable to fetch data");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  value: [],
  isLoading: false,
  isError: false,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.value = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isError = action.payload;
      });
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
