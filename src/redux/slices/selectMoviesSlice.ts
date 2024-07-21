import { createSlice } from '@reduxjs/toolkit';
import { MovieProps } from '../../components/Movie/Movie';

interface selectMovies {
  selectMovies: MovieProps[];
}

const initialState: MovieProps[] = [];

export const selectedMoviesSlice = createSlice({
  name: 'selectMovies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push = action.payload;
    },
    deleteMovie: (state, action) => {
      state.filter((movie: MovieProps) => movie.imdbID !== action.payload);
    },
  },
});

export const { addMovie, deleteMovie } = selectedMoviesSlice.actions;
export const selectSelectedMovies = (state: selectMovies) => state.selectMovies;
export default selectedMoviesSlice.reducer;
