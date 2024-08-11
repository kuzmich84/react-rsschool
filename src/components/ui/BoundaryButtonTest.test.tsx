import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import BoundaryButtonTest from './BoundaryButtonTest';

describe('Testing BoundaryButton', () => {
  test('should renders BoundaryButton', () => {
    render(<BoundaryButtonTest />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Error/)).toBeInTheDocument();
  });
});
