/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      exclude: [
        './src/main.tsx',
        './src/app/**',
        './src/services/movies.ts',
        './vite.config.ts',
        './.eslintrc.cjs',
        '**/node_modules/**',
        './next.config.mjs',
        '**/dist/**',
        '**/mocks/**',
        '**/utils/**',
      ],
    },
  },
  plugins: [react()],
});
