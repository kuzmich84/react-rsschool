import { screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import '@testing-library/jest-dom';
import App from './App';

import { renderWithProviders } from './utils/test-utils';

describe('Testing App', () => {
  test('should renders App component', () => {
    renderWithProviders(<App />);

    expect(screen.getByText('Movie Search')).toBeInTheDocument();
  });
});
