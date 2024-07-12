import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton';
import MovieList from './components/MovieList/MovieList';
import Preloader from './components/Preloader/Preloader';
import Search from './components/Search/Search';
import './App.css';

const API_KEY = '61ba9e64';

const initState = {
  movies: [],
  localSearch: localStorage.getItem('search') || 'movie',
  page: 1,
};

function App() {
  const [movies, setMovies] = useState(initState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadMore, setIsLoadMore] = useState(true);

  async function searchMovies(search: string, page = 1) {
    setIsLoading(true);

    if (localStorage.getItem('search')) {
      setIsLoadMore(false);
    }
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}`,
      );
      const data = await response.json();
      setMovies({ ...movies, movies: data.Search });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    searchMovies(movies.localSearch, movies.page);
  }, [movies.localSearch, movies.page]);

  const loadMore = () => {
    setMovies({ ...movies, page: movies.page + 1 });
  };

  const setPage = (page: number, isLoadMore: boolean) => {
    setMovies({ ...movies, page: page });
    setIsLoadMore(isLoadMore);
  };

  return (
    <div className="container">
      <Header />
      <Search searchMovies={searchMovies} setPage={setPage} />
      {isLoading ? <Preloader /> : <MovieList movies={movies.movies} />}
      {isLoadMore && <LoadMoreButton loadMore={loadMore} page={movies.page} />}
    </div>
  );
}
export default App;
