// store.js
import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlice'; // Import the cart reducer

// Configure the Redux store
export const store = configureStore({
  reducer: {
    cart: CartReducer, // Associate the cart slice with the 'cart' key
  },
});

// Export the configured Redux store
export default store;
