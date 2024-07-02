import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getData} from '../../utils';
import {showLoading} from './globalSlice';
import axios from 'axios';
import {API_URL} from '../../config';

const initialState = {
  checkout: {},
};

export const checkoutAction = createAsyncThunk(
  'authSlice/checkoutAction',
  async (payload: any, {dispatch, rejectWithValue}) => {
    dispatch(showLoading(true));
    try {
      const token = await getData('token');
      const response = axios.post(`${API_URL}/api/checkout`, payload, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      console.log(response);
      dispatch(showLoading(false));
    } catch (error) {
      dispatch(showLoading(false));
      console.log(error);
    }
  },
);

const checkOutSlice = createSlice({
  name: 'checkoutSlice',
  initialState: initialState,
  reducers: {},
});

export default checkOutSlice;
