import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';
import registerSlice from './reducers/registerSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    register: registerSlice.reducer,
  },
});

//typescript only , di js gaperlu ini ya
export type RootState = ReturnType<typeof store.getState>;
export default store;
