import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

describe('Testing Home Page', () => {
  test('should renders home component', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
  });
});
