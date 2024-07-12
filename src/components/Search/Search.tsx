import { ChangeEvent, useState } from 'react';
import styles from './Search.module.css';

interface SearchProps {
  searchMovies: (search: string, page: number) => void;
  setPage: (page: number, isLoadMore: boolean) => void;
}

const initState = localStorage.getItem('search') || '';

function Search(props: SearchProps) {
  const [search, setSearch] = useState<string>(initState);

  const handleClick = () => {
    if (search) {
      localStorage.setItem('search', search);
      props.searchMovies(search, 1);
      props.setPage(1, false);
    } else {
      props.searchMovies('movie', 1);
      props.setPage(1, true);
      localStorage.removeItem('search');
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
      <button className={styles.searchbutton} onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default Search;
