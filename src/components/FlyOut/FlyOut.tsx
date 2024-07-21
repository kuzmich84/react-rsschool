import { useAppDispatch } from '../../hooks/redux-hooks';
import { deleteAll } from '../../redux/slices/selectMoviesSlice';
import styles from './FlyOut.module.css';

export interface flyOutProps {
  count: number;
}

export default function FlyOut(props: flyOutProps) {
  const { count } = props;
  const dispatch = useAppDispatch();

  const handleUnselectClick = () => {
    dispatch(deleteAll());
  };

  return (
    <div className={styles.content}>
      <p>
        <span>{count}</span> items {count === 1 ? 'is' : 'are'} selected
      </p>
      <button className={styles.flyout_button} type="button" onClick={handleUnselectClick}>
        Unselect All
      </button>
      <button className={styles.flyout_button} type="button">
        Download
      </button>
    </div>
  );
}
