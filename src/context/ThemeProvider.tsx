import { useState } from 'react';
import ThemeContext, { Theme } from './themeContext';

export interface ThemeProviderProps {
  themeName: Theme;
  children: React.ReactNode;
}

export function ThemeProvider({ themeName, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(themeName);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
