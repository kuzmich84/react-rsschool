'use client';
import { useContext } from 'react';
import BoundaryButtonTest from '../ui/BoundaryButtonTest';
import styles from './Header.module.css';
import ThemeContext from '../../context/themeContext';
import ThemeSwitchButton from '../ThemeSwitchButton/ThemeSwitchButton';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${styles[theme]} ${styles.header_content}`}>
        <h1>Movie Search</h1>
        <div>
          <BoundaryButtonTest />
          <ThemeSwitchButton />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
