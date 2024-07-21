import { Link, useLocation } from 'react-router-dom';
import styles from './Movie.module.css';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addMovie, deleteMovie } from '../../redux/slices/selectMoviesSlice';

export interface MovieProps {
  imdbID: string;
  Title: string;
  Year: string;
  Type?: string;
  Poster: string;
  isChecked: boolean;
}

function Movie(props: MovieProps) {
  const { Title, Poster, imdbID, Year, isChecked } = props;

  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleChange = () => {
    if (!isChecked) {
      dispatch(addMovie({ Title, Poster, imdbID, Year }));
    } else {
      dispatch(deleteMovie(imdbID));
    }
  };

  return (
    <li className={styles.movie_card} key={imdbID}>
      <div className={styles.movie_image}>
        <img src={Poster} alt={Title} />
      </div>

      <div className={styles.movie_info}>
        <p className={styles.movie_title}>{Title}</p>
        <p className={styles.movie_year}>{Year}</p>
      </div>
      <div className={styles.movie_footer}>
        <Link className={styles.movie_link} to={`${location.pathname}?details=${imdbID}`}>
          Show card
        </Link>
        <input type="checkbox" onChange={handleChange} checked={isChecked} />
      </div>
    </li>
  );
}

export default Movie;
