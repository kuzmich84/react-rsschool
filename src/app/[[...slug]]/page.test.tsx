import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './page';

describe('Testing Home Page', () => {
  test('should renders page', async () => {
    render(<HomePage />);

    expect(true).toBeTruthy();
  });
});
