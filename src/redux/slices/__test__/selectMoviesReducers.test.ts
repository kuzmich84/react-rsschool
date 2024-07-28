import { mockMovie } from '../../../mocks/mockMovie';
import { mockMovies } from '../../../mocks/mockMovies';
import selectedMoviesSliceReducer, {
  addMovie,
  deleteAll,
  deleteMovie,
  initialState,
} from '../selectMoviesSlice';
import { describe, expect, test } from 'vitest';

describe('Testing selectMovies reducers', () => {
  test('check addMovie', () => {
    const state = selectedMoviesSliceReducer(initialState, addMovie(mockMovie));

    expect(initialState).toEqual([]);
    expect(state).toEqual([mockMovie]);
  });

  test('check deleteMovie', () => {
    const state = selectedMoviesSliceReducer(initialState, addMovie(mockMovies[0]));
    const state2 = selectedMoviesSliceReducer(state, addMovie(mockMovies[1]));
    const state3 = selectedMoviesSliceReducer(state2, deleteMovie('tt0462538'));

    expect(initialState).toEqual([]);
    expect(state3).not.to.equal(state3.find((movie) => movie.imdbID === 'tt0462538'));
  });

  test('check deleteAll', () => {
    const state = selectedMoviesSliceReducer(initialState, addMovie(mockMovies[0]));
    const state2 = selectedMoviesSliceReducer(state, addMovie(mockMovies[1]));
    const state3 = selectedMoviesSliceReducer(state2, deleteAll());

    expect(initialState).toEqual([]);
    expect(state3).toEqual(initialState);
  });
});
