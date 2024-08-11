'use client';

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import '../index.css';
import StoreProvider from './StoreProvider';
import HomePage from '../pages/HomePage';

export default function MainPage() {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <HomePage id="1" />;
      </StoreProvider>
    </ErrorBoundary>
  );
}
