import { useAppSelector } from '../../hooks/redux-hooks';
import { selectMovies } from '../../redux/slices/moviesSlice';
import { selectSelectedMovies } from '../../redux/slices/selectMoviesSlice';
import Movie from '../Movie/Movie';
import styles from './MovieList.module.css';

function MovieList() {
  const movies = useAppSelector(selectMovies) ?? [];
  const idSelectedList = useAppSelector(selectSelectedMovies).map((movie) => movie.imdbID);
  const modifedMovies = movies.map((movie) => ({
    ...movie,
    isChecked: idSelectedList.includes(movie.imdbID) ? true : false,
  }));

  return (
    <ul className={styles.movie_list}>
      {movies.length ? (
        modifedMovies.map((movie) => <Movie {...movie} key={movie.imdbID} />)
      ) : (
        <h2>Nothing Found</h2>
      )}
    </ul>
  );
}

export default MovieList;
