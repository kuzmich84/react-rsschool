import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { deleteAll, selectSelectedMovies } from '../../redux/slices/selectMoviesSlice';
import ExportCSV from '../../utils/exportCSV';
import styles from './FlyOut.module.css';

export interface flyOutProps {
  count: number;
}

export default function FlyOut(props: flyOutProps) {
  const { count } = props;
  const dispatch = useAppDispatch();
  const selectedMovies = useAppSelector(selectSelectedMovies);

  const handleUnselectClick = () => {
    dispatch(deleteAll());
  };

  return (
    <div className={styles.flyout}>
      <div className={styles.content}>
        <p>
          <span>{count}</span> items {count === 1 ? 'is' : 'are'} selected
        </p>
        <button className={styles.flyout_button} type="button" onClick={handleUnselectClick}>
          Unselect All
        </button>

        <ExportCSV
          className={styles.flyout_button}
          data={selectedMovies}
          fileName={`${count}_movies`}
        />
      </div>
    </div>
  );
}
