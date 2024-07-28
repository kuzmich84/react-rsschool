import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Testing Header', () => {
  test('should renders hedear component', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Movie/)).toBeInTheDocument();
  });
});
