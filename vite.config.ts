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
      exclude: ['./src/main.tsx', './vite.config.ts', './.eslintrc.cjs'],
    },
  },
  plugins: [react()],
  base: './',
});
