import { createSlice } from '@reduxjs/toolkit';

export const CardItemSlice = createSlice({
  name: 'Carditems',
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((item, index) => index !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = CardItemSlice.actions;
export default CardItemSlice.reducer;
