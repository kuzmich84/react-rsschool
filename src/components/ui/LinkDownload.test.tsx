import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinkDownload from './LinkDownload';

describe('Testing Layout', () => {
  test('should renders layout', async () => {
    render(<LinkDownload link="#" fileName="file-name" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '#');
    expect(screen.getByRole('link')).toHaveAttribute('download', 'file-name');
  });
});
