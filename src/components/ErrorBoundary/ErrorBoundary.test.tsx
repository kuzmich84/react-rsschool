import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';

const Foo = () => {
  throw new Error('Oh no');
};

describe('Testing ErrorBoundary', () => {
  test('component should throw', () => {
    vi.spyOn(console, 'error').mockImplementation(() => null);
    expect(() => render(<Foo />)).toThrow();
  });

  test('should renders ErrorBoundary component', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => null);

    render(
      <ErrorBoundary>
        <Foo />
      </ErrorBoundary>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Sorry/)).toBeVisible();
    });
  });
});
