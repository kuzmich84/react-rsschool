import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';
import Movie from './Movie';

import { renderWithProviders } from '../../utils/test-utils';
import { mockMovieWithIsCheck } from '../../mocks/mockMovieWithIsCheck';

describe('Testing Movie component', () => {
  test('should render right movie component', () => {
    renderWithProviders(
      <Movie
        imdbID={mockMovieWithIsCheck.imdbID}
        Title={mockMovieWithIsCheck.Title}
        Year={mockMovieWithIsCheck.Year}
        Poster={mockMovieWithIsCheck.Poster}
        isChecked={mockMovieWithIsCheck.isChecked}
      />,
    );

    expect(screen.getByRole('img', { name: 'The Lego Movie' })).toBeInTheDocument();
    expect(screen.getByAltText(/lego/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('The Lego Movie')).toBeInTheDocument();
    expect(screen.getByText('2014')).toBeInTheDocument();
  });
});
