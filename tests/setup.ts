import { expect, afterEach, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  vi.mock('next/navigation', () => ({
    ...require('next-router-mock'),
    useParams: () => vi.fn(),
    useSearchParams: () => vi.fn(),
    usePathname: () => vi.fn(),
  }));
});
