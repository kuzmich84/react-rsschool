import { mockMovies } from '../../../mocks/mockMovies';
import moviesSliceReducer, { fetchMovies, initialState } from '../moviesSlice';
import { describe, expect, test } from 'vitest';

describe('Testing fetchMovies reducer', () => {
  test('check fetchMovies', () => {
    const reducer = moviesSliceReducer(initialState, fetchMovies(mockMovies));

    expect(initialState.movies).toEqual([]);
    expect(reducer.movies).toEqual(mockMovies);
  });
});
