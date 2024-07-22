import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

const mockPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Testing Pagination', () => {
  test('should render pagination component', () => {
    render(<Pagination pages={mockPages} currentPage={1} setPage={() => vi.fn()} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
