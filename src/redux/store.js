import {configureStore} from '@reduxjs/toolkit';
import comicsSlice from './comicsSlice';
import heroSlice from './heroSlice';

export const store = configureStore({
  reducer: {
    hero: heroSlice,
    comics: comicsSlice,
  },
});
