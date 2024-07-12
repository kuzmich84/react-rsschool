import styles from './LoadMoreButton.module.css';

interface LoadMoreProps {
  loadMore: () => void;
  page: number;
}

function LoadMoreButton(props: LoadMoreProps) {
  return (
    <button
      onClick={props.loadMore}
      className={`${styles.search_button} ${styles.load_more_button}`}
    >
      Load Next Page
    </button>
  );
}

export default LoadMoreButton;
