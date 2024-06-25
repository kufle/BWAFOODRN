import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';
import registerFormSlice from './reducers/registerFormSlice';
import authSlice from './reducers/authSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    registerForm: registerFormSlice.reducer,
    auth: authSlice.reducer,
  },
});

//typescript only , di js gaperlu ini ya
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
