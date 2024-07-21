import { createSlice } from '@reduxjs/toolkit';
import { MovieProps } from '../../components/Movie/Movie';

interface moviesState {
  movies: {
    movies: MovieProps[];
  };
}

const initialState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { fetchMovies } = moviesSlice.actions;
export const selectMovies = (state: moviesState) => state.movies.movies;
export default moviesSlice.reducer;
