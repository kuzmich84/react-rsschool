'use client';
import { useEffect, useState } from 'react';
import { createPagesPagination } from '../utils/pagesPaginationCreator';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Preloader from '../components/Preloader/Preloader';
import MovieList from '../components/MovieList/MovieList';
import Pagination from '../components/ui/Pagination';
import CardDetail from '../components/CardDetail/CardDetail';
import { moviesApi } from '../services/movies';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { fetchMovies } from '../redux/slices/moviesSlice';
import FlyOut from '../components/FlyOut/FlyOut';
import { selectSelectedMovies } from '../redux/slices/selectMoviesSlice';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function HomePage() {
  const params = useParams();
  const router = useRouter();
  const pathName = usePathname();
  const pageId = JSON.stringify(params) === '{}' ? 1 : params?.slug[1];

  const { data, isLoading, error } = moviesApi.useGetMoviesQuery({
    search: localStorage.getItem('search') || 'movie',
    page: +pageId!,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies(data?.Search));
  }, [data]);

  const searchParams = useSearchParams();

  const initState = {
    localSearch: localStorage.getItem('search') || 'movie',
    currentPage: +pageId! || 1,
    totalResult: 0,
  };

  const [movies, setMovies] = useState(initState);

  const setPage = (page: number) => {
    setMovies({ ...movies, currentPage: page });
  };

  const setSearch = (search: string) => {
    setMovies({ ...movies, localSearch: search, currentPage: 1 });
  };

  const countPage = Math.ceil(data?.totalResults / 10);
  const pages: number[] = [];
  createPagesPagination(pages, countPage, movies.currentPage);

  const selectedMovies = useAppSelector(selectSelectedMovies);

  return (
    <div className="container">
      <Header />
      <Search setLocalSearch={setSearch} />

      <div className="main-content">
        <div className="movie-content">
          {error ? <p>Oh no, there was an error</p> : isLoading ? <Preloader /> : <MovieList />}
          {!isLoading && (
            <Pagination pages={pages} currentPage={movies.currentPage} setPage={setPage} />
          )}
          <div
            className={searchParams?.get('details') ? 'active-card' : ''}
            onClick={() => router.push(`${pathName}`)}
          ></div>
          {selectedMovies.length ? <FlyOut count={selectedMovies.length} /> : null}
        </div>
        {searchParams?.get('details') && <CardDetail />}
      </div>
    </div>
  );
}
