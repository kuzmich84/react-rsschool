import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={`${styles.notfound_content}`}>
      <h1>Oops! We can't find that page. </h1>
      <a className={`${styles.link}`} href="/">
        Go back home.
      </a>
    </div>
  );
}

export default NotFound;
