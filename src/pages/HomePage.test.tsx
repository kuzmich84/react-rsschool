import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Testing Home Page', () => {
  test('should renders home component', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
  });

  test('should clicking on a card renders detail card', async () => {
    render(<HomePage />, { wrapper: BrowserRouter });

    // screen.debug();
    // await userEvent.click(screen.getByRole('link'));
    // expect(screen.queryByRole('button')).toBe('Close');
  });
});
