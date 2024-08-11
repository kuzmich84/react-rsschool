import moviesSliceReducer, { initialState } from '../selectMoviesSlice';
import { describe, expect, test } from 'vitest';

describe('Initial state selectMoviesSlice', () => {
  test('check initial test', () => {
    const state = moviesSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
});
