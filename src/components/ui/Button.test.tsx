import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Testing Layout', () => {
  test('should renders layout', async () => {
    render(
      <Button className={'btn'} onClick={() => vi.fn()}>
        Click
      </Button>,
    );
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
});
