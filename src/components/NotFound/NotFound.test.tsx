import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import NotFound from './NotFound';

describe('Testing NotFound component', () => {
  test('should renders Not Found Page', () => {
    render(<NotFound />);
    expect(screen.getByText(`Oops! We can't find that page.`)).toBeDefined();
  });
});
