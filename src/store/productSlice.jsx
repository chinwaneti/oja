import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StatusCode from "../utils/StatusCode"

const initialState = {
  data: [],
  status: StatusCode.IDLE
};

export const setProducts = createAsyncThunk('products/get', async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = await data.json();
  return result;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(setProducts.pending,(state, action) =>{
        state.status = StatusCode.LOADING
    })
      .addCase(setProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE
      })
      .addCase(setProducts.rejected, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.ERROR
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
