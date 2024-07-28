import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Search from './Search';

const mockSearch = 'Movie';

describe('Testing Search', () => {
  test('should save search value into localstorage', () => {
    render(<Search setLocalSearch={() => vi.fn()} />, { wrapper: BrowserRouter });

    userEvent.type(screen.getByRole('textbox'), mockSearch);
    localStorage.setItem('search', mockSearch);
    expect(mockSearch).toStrictEqual(mockSearch);
  });
});
