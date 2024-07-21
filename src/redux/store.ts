import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import selectedMovieseducer from './slices/selectMoviesSlice';
import { moviesApi } from '../services/movies';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovies: selectedMovieseducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
