import Movie, { MovieProps } from '../Movie/Movie';
import styles from './MovieList.module.css';

export interface MovieListProps {
  movies: MovieProps[];
}

function MovieList(props: MovieListProps) {
  const { movies = [] } = props;
  return (
    <ul className={styles.movie_list}>
      {movies.length ? (
        movies.map((movie) => <Movie {...movie} key={movie.imdbID} />)
      ) : (
        <h2>Nothing Found</h2>
      )}
    </ul>
  );
}

export default MovieList;
