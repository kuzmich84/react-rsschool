'use client';
import { useContext } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import { selectMovies } from '../../redux/slices/moviesSlice';
import { selectSelectedMovies } from '../../redux/slices/selectMoviesSlice';
import Movie from '../Movie/Movie';
import styles from './MovieList.module.css';
import ThemeContext from '../../context/themeContext';

function MovieList() {
  const movies = useAppSelector(selectMovies) ?? [];
  const idSelectedList = useAppSelector(selectSelectedMovies).map((movie) => movie.imdbID);
  const modifedMovies = movies.map((movie) => ({
    ...movie,
    isChecked: idSelectedList.includes(movie.imdbID) ? true : false,
  }));

  const { theme } = useContext(ThemeContext);

  return (
    <ul className={`${styles[theme]} ${styles.movie_list}`}>
      {movies.length ? (
        modifedMovies.map((movie) => <Movie {...movie} key={movie.imdbID} />)
      ) : (
        <h2>Nothing Found</h2>
      )}
    </ul>
  );
}

export default MovieList;
