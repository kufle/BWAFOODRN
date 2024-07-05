import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getData} from '../../utils';
import {API_URL} from '../../config';
import axios from 'axios';
import {showLoading} from './globalSlice';

interface Istate {
  inProgress: Array<any>;
  pastOrders: Array<any>;
}

const initialState: Istate = {
  inProgress: [],
  pastOrders: [],
};

export const fetchOrder = createAsyncThunk(
  'orderSlice/fetchOrder',
  async (payload: any, {dispatch, rejectWithValue}) => {
    let status = payload;
    if (status === 'in_progress') {
      status = 'PENDING';
    } else {
      status = 'PAST_ORDERS';
    }

    dispatch(showLoading(true));
    try {
      const token = await getData('token');
      //console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      };
      const response = await axios.get(
        `${API_URL}/api/transactions?status=${status}&limit=0`,
        config,
      );
      dispatch(showLoading(false));
      return response.data;
    } catch (error: any) {
      dispatch(showLoading(false));
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({message: error.message});
    }
  },
);

export const cancelOrder = createAsyncThunk(
  'orderSlice/cancelOrder',
  async (payload: string | number, {dispatch, rejectWithValue}) => {
    dispatch(showLoading(true));
    try {
      const token = await getData('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      };
      const response = await axios.put(
        `${API_URL}/api/transactions/${payload}`,
        {status: 'CANCELLED'},
        config,
      );

      dispatch(showLoading(false));
      return response.data;
    } catch (error: any) {
      dispatch(showLoading(false));
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({message: error.message});
    }
  },
);

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOrder.fulfilled, (state, action) => {
        if (action.meta.arg === 'in_progress') {
          state.inProgress = action.payload;
        }

        if (action.meta.arg === 'past_orders') {
          state.pastOrders = action.payload;
        }
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export default orderSlice;
