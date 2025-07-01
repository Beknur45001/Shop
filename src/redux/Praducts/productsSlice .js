

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://6824116e65ba05803398c680.mockapi.io',
});

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await apiClient.get('/products');
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    selectedCategory: 'all',
  },
  reducers: {
    setCategoryFilter: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategoryFilter } = productsSlice.actions;

export const selectUniqueCategories = (state) => {
  const categories = state.products.items.map(p => p.category);
  return ['all', ...new Set(categories)];
};

export const selectFilteredProducts = (state) => {
  const { items, selectedCategory } = state.products;
  if (selectedCategory === 'all') return items;
  return items.filter(p => p.category === selectedCategory);
};

export default productsSlice.reducer;
