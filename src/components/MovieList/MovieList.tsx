import { useAppSelector } from '../../hooks/redux-hooks';
import { selectSelectedMovies } from '../../redux/slices/selectMoviesSlice';
import Movie, { MovieProps } from '../Movie/Movie';
import styles from './MovieList.module.css';

export interface MovieListProps {
  movies: MovieProps[];
}

function MovieList(props: MovieListProps) {
  const { movies = [] } = props;
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
