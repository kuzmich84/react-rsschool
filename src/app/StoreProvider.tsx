'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, setupStore } from '../redux/store';
import { ThemeProvider } from '../context/ThemeProvider';
import { Theme } from '../context/themeContext';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = setupStore();
  }

  return (
    <Provider store={storeRef.current}>
      <ThemeProvider themeName={Theme.Dark}>{children}</ThemeProvider>
    </Provider>
  );
}
