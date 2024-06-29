import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState: initialState,
  reducers: {
    showLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {showLoading} = globalSlice.actions;
export default globalSlice;
