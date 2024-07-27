import moviesSliceReducer, { initialState } from '../moviesSlice';
import { describe, expect, test } from 'vitest';

describe('Initial state moviesSlice', () => {
  test('check initial test', () => {
    const state = moviesSliceReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
});
