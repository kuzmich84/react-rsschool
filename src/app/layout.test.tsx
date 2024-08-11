import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from './layout';

describe('Testing Layout', () => {
  test('should renders layout', async () => {
    render(
      <RootLayout>
        <div>Something</div>
      </RootLayout>,
    );
    expect(screen.getByText('Something')).toBeInTheDocument();
  });
});
