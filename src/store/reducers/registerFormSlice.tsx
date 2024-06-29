import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  registerForm: {},
  photoForm: {
    uri: '',
    type: '',
    name: '',
    isUploadPhoto: false,
  },
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
    setPhotoForm(state, action) {
      state.photoForm = {
        ...state.photoForm,
        uri: action.payload.uri,
        type: action.payload.type,
        name: action.payload.name,
      };
    },
    setStatusUpload(state, action) {
      state.photoForm = {
        ...state.photoForm,
        isUploadPhoto: action.payload,
      };
    },
  },
});

export const {setRegisterForm, setPhotoForm, setStatusUpload} =
  registerSlice.actions;

export default registerSlice;
