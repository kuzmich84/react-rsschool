import { useEffect, useState } from 'react';
import { createPagesPagination } from '../utils/pagesPaginationCreator';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Preloader from '../components/Preloader/Preloader';
import MovieList from '../components/MovieList/MovieList';
import { useParams } from 'react-router-dom';
import Pagination from '../components/ui/Pagination';

const API_KEY = '61ba9e64';

export default function HomePage() {
  const { pageId } = useParams();
  const initState = {
    movies: [],
    localSearch: localStorage.getItem('search') || 'movie',
    currentPage: +pageId! || 1,
    totalResult: 0,
  };

  const [movies, setMovies] = useState(initState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const countPage = Math.ceil(movies.totalResult / 10);

  async function searchMovies(search: string, page: number) {
    if (!page) {
      page = 1;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}`,
      );
      const data = await response.json();
      setMovies({
        ...movies,
        movies: data.Search,
        totalResult: data.totalResults,
        localSearch: search,
        currentPage: page,
      });

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    searchMovies(movies.localSearch, +pageId!);
  }, [movies.localSearch, movies.currentPage, pageId]);

  const setPage = (page: number) => {
    setMovies({ ...movies, currentPage: page });
    console.log('currentPage:', page);
  };

  const setSearch = (search: string) => {
    setMovies({ ...movies, localSearch: search });
  };

  const pages: number[] = [];
  createPagesPagination(pages, countPage, movies.currentPage);

  return (
    <div className="container">
      <Header />
      <Search setLocalSearch={setSearch} />
      {isLoading ? <Preloader /> : <MovieList movies={movies.movies} />}

      {!isLoading && (
        <Pagination pages={pages} currentPage={movies.currentPage} setPage={setPage} />
      )}
    </div>
  );
}
