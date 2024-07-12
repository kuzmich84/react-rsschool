import styles from './Preloader.module.css';

function Preloader() {
  return (
    <div className={styles.loader_content}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Preloader;
