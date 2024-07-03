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
      const config = {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      };
      const rest = await axios.post(`${API_URL}/api/checkout`, payload, config);
      dispatch(showLoading(false));
      return rest.data.data;
    } catch (error: any) {
      dispatch(showLoading(false));
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({message: error.message});
    }
  },
);

const checkOutSlice = createSlice({
  name: 'checkoutSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(checkoutAction.rejected, (state, action: any) => {
      console.log('reject', action);
    });
  },
});

export default checkOutSlice;
