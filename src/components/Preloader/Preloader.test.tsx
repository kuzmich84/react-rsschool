import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Preloader from './Preloader';

describe('Testing preloader component', () => {
  test('should renders preloader', () => {
    render(<Preloader />);
    expect(true).toBeTruthy();
  });
});
