import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import App from './App';

describe('Testing App', () => {
  test('should renders App component', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText('Movie Search')).toBeInTheDocument();
  });
});
