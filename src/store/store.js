import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/globalSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;