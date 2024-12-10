import { configureStore } from '@reduxjs/toolkit';
import cardItemReducer from '../features/CardItems/CardItemSlice'; // Import the reducer

export default configureStore({
  reducer: {
    itemCard: cardItemReducer, 
  },
});
