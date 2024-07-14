import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import MovieList from './MovieList';
import { mockMovies } from '../../mocks/mockMovies';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Testing MovieList component', () => {
  test('should render list of 10 movie cards', () => {
    render(<MovieList movies={mockMovies} />, { wrapper: BrowserRouter });

    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(10);
  });

  test('should render list without cards', () => {
    render(<MovieList movies={[]} />, { wrapper: BrowserRouter });
    expect(screen.getByText('Nothing Found')).toBeInTheDocument();
  });
});
