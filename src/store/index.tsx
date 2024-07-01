import {configureStore} from '@reduxjs/toolkit';
import registerFormSlice from './reducers/registerFormSlice';
import authSlice from './reducers/authSlice';
import globalSlice from './reducers/globalSlice';
import homeSlice from './reducers/homeSlice';

const store = configureStore({
  reducer: {
    registerForm: registerFormSlice.reducer,
    auth: authSlice.reducer,
    global: globalSlice.reducer,
    home: homeSlice.reducer,
  },
});

//typescript only , di js gaperlu ini ya
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
