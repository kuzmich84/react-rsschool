import { Link, useLocation } from 'react-router-dom';
import styles from './Movie.module.css';

export interface MovieProps {
  imdbID: string;
  Title: string;
  Year: string;
  Type?: string;
  Poster: string;
}

function Movie(props: MovieProps) {
  const location = useLocation();

  const { Title: title, Poster: poster, imdbID: id, Year: year } = props;
  return (
    <li className={styles.movie_card} key={id}>
      <div className={styles.movie_image}>
        <img src={poster} alt={title} />
      </div>

      <div className={styles.movie_info}>
        <p className={styles.movie_title}>{title}</p>
        <p className={styles.movie_year}>{year}</p>
      </div>
      <div className={styles.movie_footer}>
        <Link className={styles.movie_link} to={`${location.pathname}?details=${id}`}>
          Show card
        </Link>
        <input type="checkbox" />
      </div>
    </li>
  );
}

export default Movie;
