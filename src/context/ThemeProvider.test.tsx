import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from '../components/Header/Header';

import { ThemeProvider } from './ThemeProvider';
import { Theme } from './themeContext';

describe('Testing Theme Provider', () => {
  test('provides expected ThemeContext obj to child elements', () => {
    render(
      <ThemeProvider themeName={Theme.Dark}>
        <Header />
      </ThemeProvider>,
    );
    expect(screen.getByRole('button')).toHaveClass('dark');
  });
});
