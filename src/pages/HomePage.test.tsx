import { describe, test } from 'vitest';
import HomePage from './HomePage';

import '@testing-library/jest-dom';
import { renderWithProviders } from '../utils/test-utils';

describe('Testing Home Page', () => {
  test('should renders home component', async () => {
    renderWithProviders(<HomePage />);
  });
});
