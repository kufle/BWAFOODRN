import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  registerForm: {},
};

const registerSlice = createSlice({
  name: 'registerSlice',
  initialState: initialState,
  reducers: {
    setRegisterForm(state, action) {
      state.registerForm = {
        ...state.registerForm,
        ...action.payload,
      };
    },
  },
});

export const {setRegisterForm} = registerSlice.actions;

export default registerSlice;
