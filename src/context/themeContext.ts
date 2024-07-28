import { createContext } from 'react';

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

interface ThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export default ThemeContext;
