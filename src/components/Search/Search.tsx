import { ChangeEvent } from 'react';
import styles from './Search.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

interface SearchProps {
  setLocalSearch: (search: string) => void;
}
function Search({ setLocalSearch }: SearchProps) {
  const [search, setSearch] = useLocalStorage('search');
  const navigate = useNavigate();

  const handleClick = () => {
    if (search) {
      setLocalSearch(search);
      navigate('/page/1');
    } else {
      setLocalSearch('movie');
      navigate('/page/1');
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
      <button className={styles.search_button} onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default Search;
