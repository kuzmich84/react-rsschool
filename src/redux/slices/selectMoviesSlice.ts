import { createSlice } from '@reduxjs/toolkit';
import { MovieProps } from '../../components/Movie/Movie';

interface selectMovies {
  selectedMovies: MovieProps[];
}

const initialState: MovieProps[] = [];

export const selectedMoviesSlice = createSlice({
  name: 'selectMovies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    deleteMovie: (state, action) => {
      return state.filter((movie) => movie.imdbID !== action.payload);
    },
    deleteAll: () => {
      return initialState;
    },
  },
});

export const { addMovie, deleteMovie, deleteAll } = selectedMoviesSlice.actions;
export const selectSelectedMovies = (state: selectMovies) => state.selectedMovies;
export default selectedMoviesSlice.reducer;
