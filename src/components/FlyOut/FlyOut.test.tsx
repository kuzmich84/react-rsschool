import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import FlyOut from './FlyOut';
import { renderWithProviders } from '../../utils/test-utils';

const count = 2;

describe('Testing Home Page', () => {
  test('should renders home component', async () => {
    renderWithProviders(<FlyOut count={count} />);
    expect(screen.getByText(2)).toBeInTheDocument();
  });
});
