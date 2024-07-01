import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {showLoading} from './globalSlice';
import {API_URL} from '../../config';
import {getData, storeData, storeRemoveMultiData} from '../../utils';

interface Istate {
  user: any;
  errors: any;
}

const initialState: Istate = {
  user: {},
  errors: null,
};

export const registerUser = createAsyncThunk(
  'authSlice/register',
  async (payload: any, {rejectWithValue, dispatch}) => {
    dispatch(showLoading(true));
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/register`,
        payload,
      );

      const token = response.data.access_token;
      const user = {...response.data.data};

      //Upload Photo
      if (payload.photoForm.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('photo', payload.photoForm);
        const photo = await axios.post(
          `${API_URL}/api/profiles/uploadPhoto`,
          photoForUpload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        user.photoProfile = photo.data.data;
      }
      //storeData user to localStorage
      storeData('user', user);
      storeData('token', {value: token});
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

export const loginUser = createAsyncThunk(
  'authSlice/loginUser',
  async (payload: any, {rejectWithValue, dispatch}) => {
    dispatch(showLoading(true));
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, payload);
      storeData('user', response.data.data);
      storeData('token', {value: response.data.access_token});
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

export const logoutUser = createAsyncThunk(
  'authSlice/logoutUser',
  async (_, {rejectWithValue, dispatch}) => {
    dispatch(showLoading(true));
    try {
      const token = await getData('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      };
      await axios.post(`${API_URL}/api/auth/logout`, {}, config);

      storeRemoveMultiData(['user', 'token']);
      dispatch(showLoading(false));
    } catch (error: any) {
      dispatch(showLoading(false));
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
  reducers: {
    reset(state) {
      state.user = {};
      state.errors = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action: any) => {
        //console.log('reject', action);
        state.errors = action.payload || action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.errors = action.payload || action.error.message;
      })
      .addCase(logoutUser.fulfilled, state => {
        authSlice.caseReducers.reset(state);
      })
      .addCase(logoutUser.rejected, (state, action: any) => {
        state.errors = action.payload || action.error.message;
      });
  },
});

export default authSlice;
