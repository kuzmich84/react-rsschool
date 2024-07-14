import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import CardDetail from './CardDetail';
import { mockMoviesDetail } from '../../mocks/mockMovieDetail';

describe('Testing Card Derail', () => {
  test('fetch card detail', async () => {
    vi.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockMoviesDetail),
      } as Response);
    });

    render(<CardDetail />, { wrapper: BrowserRouter });

    expect(await screen.findByText(/David/i)).toBeInTheDocument();
    expect(await screen.findByText(/Dan/i)).toBeInTheDocument();
    expect(await screen.findByText(/27/i)).toBeInTheDocument();
    expect(await screen.findByText(/Homer/i)).toBeInTheDocument();
    expect(await screen.findByRole('button')).toBeInTheDocument();
  });
});
