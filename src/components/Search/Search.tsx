'use client';
import { ChangeEvent, useContext } from 'react';
import styles from './Search.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';
import ThemeContext from '../../context/themeContext';
import { useRouter } from 'next/navigation';

interface SearchProps {
  setLocalSearch: (search: string) => void;
}

function Search({ setLocalSearch }: SearchProps) {
  const [search, setSearch] = useLocalStorage('search');
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    if (search) {
      setLocalSearch(search);
      router.push('/page/1');
    } else {
      setLocalSearch('movie');
      router.push('/page/1');
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div className={styles.search_content}>
      <input
        type="text"
        placeholder="Try to search a movie..."
        value={search}
        onChange={handleChange}
      />
      <button className={`${styles[theme]} ${styles.search_button}`} onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default Search;
