import { useContext, useEffect } from 'react';
import styles from './ThemeSwitchButton.module.css';
import ThemeContext, { Theme } from '../../context/themeContext';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function ThemeSwitchButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [value, setValue] = useLocalStorage('theme');

  useEffect(() => {
    if (value) {
      setTheme(value as Theme);
    } else {
      setValue(theme);
    }
  }, []);

  const handleChange = () => {
    theme === Theme.Dark ? setTheme(Theme.Light) : setTheme(Theme.Dark);
    value === Theme.Dark ? setValue(Theme.Light) : setValue(Theme.Dark);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={handleChange} checked={value === Theme.Light} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}
