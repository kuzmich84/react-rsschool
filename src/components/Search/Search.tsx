import { ChangeEvent, useCallback } from 'react';
import styles from './Search.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';

interface SearchProps {
  searchMovies: (search: string, page: number) => void;
  setPage: (page: number, isLoadMore: boolean) => void;
}
function Search({ searchMovies, setPage }: SearchProps) {
  const [search, setSearch] = useLocalStorage('search');

  const handleClick = useCallback(() => {
    if (search) {
      searchMovies(search, 1);
      setPage(1, false);
    } else {
      searchMovies('movie', 1);
      setPage(1, true);
    }
  }, [search, searchMovies, setPage]);

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
      <button className={styles.searchbutton} onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default Search;
