import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface Istate {
  user: any;
  error: any;
}

const initialState: Istate = {
  user: {},
  error: null,
};

export const registerUser = createAsyncThunk(
  'authSlice/register',
  async (userData: any, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'https://food.kame.my.id/api/auth/register',
        userData,
      );
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({message: error.message});
    }
  },
);

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        console.log('Pending');
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log('terpenuhi', action);
      })
      .addCase(registerUser.rejected, (state, action: any) => {
        console.log('reject', action);
        state.error = action.payload || action.error.message;
      });
  },
});

export default authSlice;
