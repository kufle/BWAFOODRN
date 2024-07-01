import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../config';

interface Istate {
  foods: Array<any>;
  newTaste: Array<any>;
  popular: Array<any>;
  recommended: Array<any>;
}

const initialState: Istate = {
  foods: [],
  newTaste: [],
  popular: [],
  recommended: [],
};

export const getFoods = createAsyncThunk(
  'homeSlice/getFoods',
  async (_, {rejectWithValue}) => {
    try {
      let response = await axios.get(`${API_URL}/api/foods`);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({message: error.message});
    }
  },
);

export const getFoodsByTypes = createAsyncThunk(
  'homeSlice/getFoodsByTypes',
  async (payload: string, {rejectWithValue}) => {
    try {
      let response = await axios.get(`${API_URL}/api/foods?types=${payload}`);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({message: error.message});
    }
  },
);

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFoods.fulfilled, (state, action) => {
        //console.log('fulfilled', action);
        state.foods = action.payload;
      })
      .addCase(getFoods.rejected, (state, action) => {
        console.log('reject', action.payload);
      })
      .addCase(getFoodsByTypes.fulfilled, (state, action) => {
        if (action.meta.arg === 'new') {
          state.newTaste = action.payload;
        }
      });
  },
});

export default homeSlice;
