import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Movie from './Movie';
import { mockMovie } from '../../mocks/mockMovie';

describe('Testing Movie component', () => {
  test('should render right movie component', () => {
    render(
      <Movie
        imdbID={mockMovie.imdbID}
        Title={mockMovie.Title}
        Year={mockMovie.Year}
        Poster={mockMovie.Poster}
      />,
      { wrapper: BrowserRouter },
    );

    expect(screen.getByRole('img', { name: 'The Lego Movie' })).toBeInTheDocument();
    expect(screen.getByAltText(/lego/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('The Lego Movie')).toBeInTheDocument();
    expect(screen.getByText('2014')).toBeInTheDocument();
  });
});
