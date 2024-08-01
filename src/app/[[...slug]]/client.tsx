'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../../context/ThemeProvider';
import { store } from '../../redux/store';
import { Theme } from '../../context/themeContext';

const App = dynamic(() => import('../../App'), { ssr: false });

export function ClientOnly() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider themeName={Theme.Dark}>
          <App />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}
