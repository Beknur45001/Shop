
import { configureStore } from '@reduxjs/toolkit';

import productsReducer from "../redux/Praducts/productsSlice "
import cartReduser from "../redux/Card/CartSlise"
import wishlistReduser from "../redux/wishList/wishListSlise"

export const myStore = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReduser,
    wishlist: wishlistReduser,
  },
});
