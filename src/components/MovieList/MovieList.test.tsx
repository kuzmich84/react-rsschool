import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import MovieList from './MovieList';

import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import { initialState } from '../../redux/slices/moviesSlice';

describe('Testing MovieList component', () => {
  test('should render list without cards', () => {
    renderWithProviders(<MovieList />, { preloadedState: { movies: initialState } });
    expect(screen.getByText('Nothing Found')).toBeInTheDocument();
  });
});
