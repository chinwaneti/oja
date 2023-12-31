import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StatusCode from '../utils/StatusCode';

const initialState = {
  data: [],
  status: StatusCode.IDLE,
  user: {
    name: '',
    email: '',
    address: '',
  },
  checkoutStatus: '',
};

export const setProducts = createAsyncThunk('products/get', async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = await data.json();
  return result;
});

export const initiateCheckout = createAsyncThunk('cart/checkout', async () => {
  return 'success';
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
    resetCheckoutStatus(state) {
      state.checkoutStatus = '';
    },
    setUserInformation(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setProducts.pending, (state) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(setProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(setProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      })
      .addCase(initiateCheckout.fulfilled, (state) => {
        state.checkoutStatus = 'success';
        state.data = []; 
      })
      .addCase(initiateCheckout.rejected, (state) => {
        state.checkoutStatus = 'error';
      });
  },
});

export const { fetchProducts, resetCheckoutStatus, setUserInformation } = productSlice.actions;
export default productSlice.reducer;
