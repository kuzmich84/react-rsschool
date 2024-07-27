import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import selectedMovieseducer from './slices/selectMoviesSlice';
import { moviesApi } from '../services/movies';

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovies: selectedMovieseducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
