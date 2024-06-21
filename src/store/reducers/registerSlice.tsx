import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const registerSlice = createSlice({
  name: 'registerSlice',
  initialState: initialState,
  reducers: {
    setUserData(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const {setUserData} = registerSlice.actions;

export default registerSlice;
